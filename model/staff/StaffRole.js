import mongoose from "mongoose";

const StaffRoleSchema = new mongoose.Schema({
    staff_role_code: { type: String, required: true },
    staff_role_description: { type: String, required: true },
});

const staffRole = mongoose.model('StaffRole', StaffRoleSchema);
export default staffRole;

