import express from 'express';
import { addStaff, deleteStaff, getAllStaff, getStaffById, updateStaff } from '../../controllers/staff/staffController.js';
const StaffRouter = express.Router();


// @route   GET /api/staff
// @desc    Get all staff
StaffRouter.get('/', getAllStaff);

// @route   GET /api/staff/:id
// @desc    Get staff by ID
StaffRouter.get('/:id', getStaffById);

// @route   POST /api/staff
// @desc    Create new staff
StaffRouter.post('/', addStaff);

// @route   PUT /api/staff/:id
// @desc    Update staff details
StaffRouter.put('/:id', updateStaff);

// @route   DELETE /api/staff/:id
// @desc    Delete a staff member
StaffRouter.delete('/:id', deleteStaff);

export default StaffRouter