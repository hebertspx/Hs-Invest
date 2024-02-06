const prisma = require("../../config/prisma.config");

async function listAll(){
    const rows = await prisma.users.findMany()
    return rows
}

async function create(item){
    const rows = await prisma.users.create({ data: item });
    return rows;
}

module.exports = { 
    listAll,
    create
 };
