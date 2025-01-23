import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        unique: true,
      },
      password: {
        type: String,

      },
      phonenumber: {
        type: Number,
      }

})

const User = mongoose.model('User', userSchema)

export default User
