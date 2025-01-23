import jwt from "jsonwebtoken";


function generateToken(payload) {
    return jwt.sign(payload, process.env.JWT_SECRET_STRING, {expiresIn: '1h'})
}

export default generateToken;