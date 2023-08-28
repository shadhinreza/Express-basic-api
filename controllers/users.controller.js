let users = require('../models/users.model');
const {v4: uuidv4} = require('uuid');

//all users controller
const getAllUsers = (req, res) => {
    res.status(200).json({users});
};

//Create a new user controller
const createUser = (req, res) => {
    let newUser = {
        id : uuidv4(),
        username : req.body.username,
        profession : req.body.profession,
        email : req.body.email
    }
    users.push(newUser);
    res.status(200).json(users)   
};

//Update User Controller
const updateUser = (req, res) => {
    let id = req.params.id;
    let {username,profession, email} = req.body;
    users.filter(user => (user.id === id))
    .map(selectedUser => {
        selectedUser.username = username;
        selectedUser.profession = profession;
        selectedUser.email = email;
    })
    res.status(200).json(users)
};

//Delete User Controller
const deleteUser = (req, res) => {
    const deleteUserId = req.params.id;
    users = users.filter(user => user.id !== deleteUserId);
    res.status(200).json(users);
}


module.exports = {
    getAllUsers,
    createUser,
    updateUser,
    deleteUser
}