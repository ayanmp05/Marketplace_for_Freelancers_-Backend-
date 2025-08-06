import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
  username:{
    type:String,
    required:[true,'username is required'],
    unique:true,
  },
  email:{
    type:String,
    required:[true,'email is required'],
    unique:true,
  },
  password:{
    type:String,
    required:[true,'password is required'],
  },
  img:{
    type:String,
    required:false,
  },
  country:{
    type:String,
    required:[true,'country is required'],
  },
  phone:{
    type:String,
    required:false,
  },
  desc:{
    type:String,
    required:false,
  },
  isSeller:{
    type:Boolean,
    default: false,
  },
},{
  timestamps:true
});

const User = mongoose.model("User", userSchema);
export default User;