const { hashPassword } = require("../../../untils/hashPassword");
const { use, all } = require("./users.controller");
const userRepository = require("./users.repository");

async function listAll(){
    const allUsers = userRepository.listAll()
    return allUsers
}


async function create(registerData){
    
    const encryptPass = await hashPassword(registerData.password, 10)
    registerData.password = encryptPass
    registerData.confirm_password = encryptPass
    const newUser = await userRepository.create(registerData);
    return newUser;
}

module.exports = { 
    listAll,
    create
 };
