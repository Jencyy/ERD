import express from 'express';
import { 
    addStaffRole, 
    deleteStaffRole, 
    getAllStaffRoles, 
    getStaffRoleById, 
    updateStaffRole 
} from '../../controllers/staff/staffRoleController.js';

const StaffRolesrouter = express.Router();

// @route   GET /api/staff-roles
// @desc    Get all staff roles
StaffRolesrouter.get('/', getAllStaffRoles);

// @route   GET /api/staff-roles/:id
// @desc    Get staff role by ID
StaffRolesrouter.get('/:id', getStaffRoleById);

// @route   POST /api/staff-roles
// @desc    Add new staff role
StaffRolesrouter.post('/', addStaffRole);

// @route   PUT /api/staff-roles/:id
// @desc    Update staff role by ID
StaffRolesrouter.put('/:id', updateStaffRole);

// @route   DELETE /api/staff-roles/:id
// @desc    Delete staff role by ID
StaffRolesrouter.delete('/:id', deleteStaffRole);

export default StaffRolesrouter;
