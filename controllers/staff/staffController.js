import Staff from "../../model/staff/staff.js";

// Get all staff members
export const getAllStaff = async (req, res) => {
    try {
        const staff = await Staff.find().populate('staff_role');
        res.json(staff);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get staff by ID
export const getStaffById = async (req, res) => {
    try {
        const staff = await Staff.findById(req.params.id).populate('staff_role');
        if (!staff) return res.status(404).json({ message: 'Staff member not found' });
        res.json(staff);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Add new staff
export const addStaff = async (req, res) => {
    const newStaff = new Staff(req.body);
    try {
        const staff = await newStaff.save();
        res.status(201).json(staff);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update staff details
export const updateStaff = async (req, res) => {
    try {
        const updatedStaff = await Staff.findByIdAndUpdate(req.params.id, req.body, { new: true }).populate('staff_role');
        if (!updatedStaff) return res.status(404).json({ message: 'Staff member not found' });
        res.json(updatedStaff);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete staff
export const deleteStaff = async (req, res) => {
    try {
        const deletedStaff = await Staff.findByIdAndDelete(req.params.id);
        if (!deletedStaff) return res.status(404).json({ message: 'Staff member not found' });
        res.json({ message: 'Staff member deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
