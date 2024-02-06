const userRepository = require("./users.repository");

async function create(registerData){
    const newUser = await userRepository.create(registerData);
    return newUser;
}

module.exports = { create };
