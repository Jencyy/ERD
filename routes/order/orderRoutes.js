import express from 'express';
import { addOrder, deleteOrder, getAllOrders, getOrderById, updateOrder } from '../../controllers/order/orderController.js';
const orderRouter = express.Router();

// @route   GET /api/orders
// @desc    Get all orders
orderRouter.get('/', getAllOrders);

// @route   GET /api/orders/:id
// @desc    Get order by ID
orderRouter.get('/:id', getOrderById);

// @route   POST /api/orders
// @desc    Create new order
orderRouter.post('/', addOrder);

// @route   PUT /api/orders/:id
// @desc    Update order
orderRouter.put('/:id', updateOrder);

// @route   DELETE /api/orders/:id
// @desc    Delete order
orderRouter.delete('/:id', deleteOrder);

export default orderRouter