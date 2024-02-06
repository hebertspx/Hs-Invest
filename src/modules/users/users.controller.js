const express = require("express");
const router = express.Router();
const userService = require("./users.service");

router.get('/', async function (_req, res){
    try {
        const allUsers = await userService.listAll()
        res.status(201).json({data: allUsers})
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ error: "Internal server error" });
    }
})

router.post('/', async function(req, res){
    try {
        const newUser = await userService.create(req.body);
        res.status(201).json({ data: newUser });
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

module.exports = router;
