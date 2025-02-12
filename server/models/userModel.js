import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required:true
  },
  email: {
    type: String,
    unique : true
  },
  phoneNumber: {
    type: Number,
   
  },
  password: {
    type: String,
    required: true
  },
  avatar : {
    type : String ,
   
  },
  role : {
    type : String ,
    enum : ['user', 'admin'] ,
    default : 'user'
  }

});

const User = mongoose.model('User', userSchema);

export default User;