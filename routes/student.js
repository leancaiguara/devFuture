const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentCtrll");

router.post("/register", studentController.register);
router.post("/login", studentController.login);
router.get("/", studentController.getAllStudents);
router.get("/:id", studentController.studentById);
router.put("/edit/:id", studentController.updateStudent);

module.exports = router;
