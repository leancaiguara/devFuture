const Admin = require("../models/Admin")
const Student=require("../models/Student")
const Volunteer=require("../models/Volunteer")

class AdminCtrll    {

static async register(req,res)  {

try {
    
  const newAdmin=await Admin.create(req.body)

  return res(200).send(newAdmin)

} catch (error) {

    return res(500).send(error)
}







}

static async deleteVolunteer (req,res)    {

try {
  
const student=await Volunteer.deleteOne({_id:req.params.id})

return res.status(200).send("User deleted successfully")
     

} catch (error) {
    return res.status(500).send(error)



}


}


static async deleteStudent(req,res) {


    try {
        
        const student=await Student.deleteOne({_id:req.params._id})

        return res.status(200).send("User deleted successfully")
             

    } catch (error) {
        
        return res.status(500).send(error)

    }
}


}

module.exports=AdminCtrll