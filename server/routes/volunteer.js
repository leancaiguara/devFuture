const router = require("express").Router();
const volunteerCtrll = require("../controllers/volunteerCtrll");

router.post("/add", volunteerCtrll.create);

router.get("/", volunteerCtrll.getAll);

router.get("/:id", volunteerCtrll.getVolunteer);

router.put("/:id", volunteerCtrll.updateVolunteer);

module.exports = router;
