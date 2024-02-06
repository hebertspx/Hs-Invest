const prisma = require("../../config/prisma.config");

async function create(item){
    const rows = await prisma.users.create({ data: item });
    return rows;
}

module.exports = { create };
