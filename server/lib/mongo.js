// const mongoose = require('mongoose');
// const userSchema = require('../model/user');

// let name = req.body.name;
// let email = req.body.email;
// let password = req.body.password;

// let docs = await getUsers(email);

// exports.addUser = () => {
//     if (docs.length > 0){
//         res.render('signUp',{err: "This User already exists, please try again..."})
//         return;
//     } 
    
//     const user = new userSchema({
//     name: name,
//     email: email,
//     password:password,
// });

// user.save()


// }

// exports.getUsers = async() => {
//     let data = await userSchema.find({})

//     return data;
// }
