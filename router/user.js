const userController = require("../controller/userController")

const router = require("express").Router();

//GET All USER
router.get("/",userController.getAllUser);

//DELETE USER
router.delete("/:id",userController.deleteUser)

// UPDATE NUMBER PHONE, wallID, xKey
router.put('/:id', userController.updateUser)

module.exports = router;
