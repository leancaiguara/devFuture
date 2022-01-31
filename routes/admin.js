const express=require("express")
const router=express.Router()
const AdminCtrll=require("../controllers/adminCtrll")

router.post("/register",AdminCtrll.register)
router.delete("/delVolunteer/:id",AdminCtrll.deleteVolunteer)
router.delete("/delStudent/:id",AdminCtrll.deleteStudent)


module.exports=router