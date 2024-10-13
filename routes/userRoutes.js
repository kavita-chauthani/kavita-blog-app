const express = require("express");
const { getAllUsers, registerController, loginController } = require("../controllers/userControllers");

const router = express.Router();

router.get('/all-users',getAllUsers); //GET ALL USER||GET
router.post('/register', registerController);// CREATE ALL USER || POST
router.post('/login',loginController) //Login || POST


module.exports = router;
