import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    email: String,
    password: String,
  });

  const Kitten = mongoose.model('Kitten', kittySchema); 


  export default UserModel;