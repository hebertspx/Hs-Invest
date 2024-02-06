const express = require("express");
const userRouter = require("./src/modules/users/users.controller");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/users', userRouter); // Definindo a rota raiz do usuário

app.listen(port, function(){
    console.log(`Listening on port ${port}`);
});