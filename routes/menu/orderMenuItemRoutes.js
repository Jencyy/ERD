import express from 'express';
import { 
    addOrderMenuItem, 
    deleteOrderMenuItem, 
    getAllOrderMenuItems, 
    getOrderMenuItemById, 
    updateOrderMenuItem 
} from '../../controllers/menu/orderMenuItemController.js';

const orderMenuItemRouter = express.Router();

// @route   GET /api/order-menu-items
// @desc    Get all order menu items
orderMenuItemRouter.get('/', getAllOrderMenuItems);

// @route   GET /api/order-menu-items/:id
// @desc    Get order menu item by ID
orderMenuItemRouter.get('/:id', getOrderMenuItemById);

// @route   POST /api/order-menu-items
// @desc    Add new order menu item
orderMenuItemRouter.post('/', addOrderMenuItem);

// @route   PUT /api/order-menu-items/:id
// @desc    Update order menu item by ID
orderMenuItemRouter.put('/:id', updateOrderMenuItem);

// @route   DELETE /api/order-menu-items/:id
// @desc    Delete order menu item by ID
orderMenuItemRouter.delete('/:id', deleteOrderMenuItem);

export default orderMenuItemRouter;
