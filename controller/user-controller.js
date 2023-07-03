const User = require("../model/User")

const getAllUsers = async(req,res,next) => {
    let users;
    try{
       //can input parameters into.find()
        users = await User.find();
    }
    catch(err){
        return next(err)
    }
    if(!users){
        return res.status(500).json({message:"Internal Server Error"})
    }
    return res.status(200).json({ users })
}

const addUserCode = async(req,res,next) => {
   const{username, password} = req.body;
   let user; 
   try{
    user = new User({
        username,
        password
    })
    user = await user.save();
    if(!user) {
        return res.status(500).json({ message: "Unable to save"})
    }
    return res.status(201).json({user})
   }
   catch(err){
    return res.status(500).json({message: "can't save"})
   }
}

const updateUser = async(req, res, next) => {

const id = req.params.id
const { username, password} = req.body;
if(
    !username && 
    username.trim =="" &&
     !password &
      password.trim === ""
){
    return res.status(422).json({message: "invalid credentials"})
}
let user; 

try{
    user = await User.findByIdAndUpdate(id, {username, password})

}
catch(err){
    return next(err)

}
if(!user){
    return res.status(500).json({message:"Unable to Save User"})
}
return res.status(200).json({message: "Updated Succesfully"})

}

const deleteUser = async(req, res,next) => {
    const id = req.params.id;
    let user;
    try{
        user = await User.findByIdAndRemove(id);

    }
    catch(err){
        return next(err)
    }
    if (!user){
        return res.status(500).json({message: "Unable to Delete user"})
    }
    return res.status(200).json({message:"Succesfully Deleted"})

}
const getById = async(req,res,next) => {
    const id = req.params.id;
    let user; 
    try{
        user = await User.findById(id)
    }
    catch(err){
        return next(err)
    }
    if(!user){
        return res.status(500).json({message: "Unable to Get user"})
    }
    return res.status(200).json({user})

}
exports.getAllUsers = getAllUsers;
exports.addUserCode = addUserCode;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
exports.getById = getById;