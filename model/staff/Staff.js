import mongoose from "mongoose";
 

const StaffSchema = new mongoose.Schema({
    staff_first_name:{
        type:String,
        required:true
    },
    staff_last_name:{
        type:String,
        required:true
    },
    staff_role:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'StaffRole',
        required:true
    }
})


const Staff= mongoose.model('Staff', StaffSchema);
export default Staff