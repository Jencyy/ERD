import express from 'express';
import { 
    addMenuItem, 
    deleteMenuItem, 
    getAllMenuItems, 
    getMenuItemById, 
    updateMenuItem 
} from '../../controllers/menu/menuItemController.js';

const menuItemRouter = express.Router();

// @route   GET /api/menu-items
// @desc    Get all menu items
menuItemRouter.get('/', getAllMenuItems);

// @route   GET /api/menu-items/:id
// @desc    Get menu item by ID
menuItemRouter.get('/:id', getMenuItemById);

// @route   POST /api/menu-items
// @desc    Add new menu item
menuItemRouter.post('/', addMenuItem);

// @route   PUT /api/menu-items/:id
// @desc    Update menu item by ID
menuItemRouter.put('/:id', updateMenuItem);

// @route   DELETE /api/menu-items/:id
// @desc    Delete menu item by ID
menuItemRouter.delete('/:id', deleteMenuItem);

export default menuItemRouter;
