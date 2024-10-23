import StaffRole from '../../model/staff/StaffRole.js'

// Get all Staff Roles
export const getAllStaffRoles = async (req, res) => {
    try {
        const staffRoles = await StaffRole.find();
        res.json(staffRoles);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get Staff Role by ID
export const getStaffRoleById = async (req, res) => {
    try {
        const staffRole = await StaffRole.findById(req.params.id);
        if (!staffRole) return res.status(404).json({ message: 'Staff Role not found' });
        res.json(staffRole);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Add new Staff Role
export const addStaffRole = async (req, res) => {
    const newStaffRole = new StaffRole(req.body);
    try {
        const savedStaffRole = await newStaffRole.save();
        res.status(201).json(savedStaffRole);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update Staff Role by ID
export const updateStaffRole = async (req, res) => {
    try {
        const updatedStaffRole = await StaffRole.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedStaffRole) return res.status(404).json({ message: 'Staff Role not found' });
        res.json(updatedStaffRole);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete Staff Role by ID
export const deleteStaffRole = async (req, res) => {
    try {
        const deletedStaffRole = await StaffRole.findByIdAndDelete(req.params.id);
        if (!deletedStaffRole) return res.status(404).json({ message: 'Staff Role not found' });
        res.json({ message: 'Staff Role deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
