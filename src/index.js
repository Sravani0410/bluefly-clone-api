const express = require("express");
const cors = require("cors");



const productsController=require("./controllers/products.controllers")


const userController = require("./controllers/user.controllers")
const {register, login} = require("./controllers/auth.controllers");

const app = express();
const port=process.env.PORT || 5300

app.use(cors());
app.use(express.json());

app.use("/users", userController);
app.use("/register", register)
app.use("/login", login)

app.use("/product",productsController)

module.exports = {app,port};

