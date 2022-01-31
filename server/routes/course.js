const router = require("express").Router();

const courseCtrll = require("../controllers/courseCtrll");

router.post("/add", courseCtrll.createCourse);

router.get("/", courseCtrll.allCourses);

router.get("/:id", courseCtrll.getCourse);

router.put("/:id", courseCtrll.updateCourse);

router.delete("/:id", courseCtrll.deleteCourse);

module.exports = router;
