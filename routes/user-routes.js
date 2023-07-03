const express = require ('express');
const{getAllUsers, addUserCode, updateUser, deleteUser, getById} = require("../controller/user-controller")

const router = express.Router();
router.get('/', getAllUsers)
router.post('/', addUserCode);
router.put("/:id", updateUser)
router.delete("/:id", deleteUser)
router.get("/:id", getById)
module.exports = router;
