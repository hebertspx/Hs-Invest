const bcrypt = require("bcryptjs")


function hashPassword(password, value){
    const hashPass = bcrypt.hash(password, value)
    return hashPass
}

module.exports = {
    hashPassword
}