import express from 'express';
import { addCustomer, deleteCustomer, getAllCustomers, getCustomerById, updateCustomer } from '../../controllers/customer/customerController.js';
const customerRoutes = express.Router();


// @route   GET /api/customers
// @desc    Get all customers
customerRoutes.get('/', getAllCustomers);

// @route   GET /api/customers/:id
// @desc    Get customer by ID
customerRoutes.get('/:id', getCustomerById);

// @route   POST /api/customers
// @desc    Add new customer
customerRoutes.post('/', addCustomer);

// @route   PUT /api/customers/:id
// @desc    Update customer
customerRoutes.put('/:id', updateCustomer);

// @route   DELETE /api/customers/:id
// @desc    Delete customer
customerRoutes.delete('/:id', deleteCustomer);

export default customerRoutes