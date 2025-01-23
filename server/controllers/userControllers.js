import User from "./../models/userModel.js";
import generateToken from "../utils/jwt.js";
import bcrypt from "bcrypt";

export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).json({
      message: "User is not registerd please try register and try again",
    });
  }

  // if user exist check password
  const isMatched = await bcrypt.compare(password, user.password);
  console.log(isMatched);

  if (!isMatched) {
    return res.status(400).json({
      message: "password do not match",
    });
  }
  const payload = {
    name: user.name,
    id: user._id,
  };

  const token = generateToken(payload);
  return res.status(200).json({
    message: "password",
    data: {
      token,
    },
  });
};

export const register = async (req, res) => {
  const { name, email, password, phoneNumber } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    return res.status(400).json({
      message: "user already exists , please login",
    });
  }

  //hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  const userData = {
    name,
    email,
    phoneNumber,
    password: hashedPassword,
  };

  const newUser = await User.create(userData);
  res.status(201).json({
    message: "user created",
    data: newUser,
  });
};