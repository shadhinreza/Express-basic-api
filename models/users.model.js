const {v4: uuidv4} = require('uuid');

const users = [
    {   id: uuidv4(),
        username: 'Shadhin reza',
        profession: 'Web-developer',
        email: 'tarunna147@gmail.com'
    },
    {
        id: uuidv4(),
        username: 'Ali reza',
        profession: 'SoftWare-developer',
        email: 'alireza@gmail.com'
    },
    {
        id: uuidv4(),
        username: 'Hasan Sarker',
        profession: 'Programmer',
        email: 'hasansarker@gmail.com'
    }
]

module.exports = users;