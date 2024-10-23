import express from 'express';
import { addMenu, deleteMenu, getAllMenus, getMenuById, updateMenu } from '../../controllers/menu/menuController.js';
const menuRouter = express.Router();


// @route   GET /api/menu
// @desc    Get all menus
menuRouter.get('/', getAllMenus);

// @route   GET /api/menu/:id
// @desc    Get menu by ID
menuRouter.get('/:id', getMenuById);

// @route   POST /api/menu
// @desc    Add new menu
menuRouter.post('/', addMenu);

// @route   PUT /api/menu/:id
// @desc    Update menu
menuRouter.put('/:id', updateMenu);

// @route   DELETE /api/menu/:id
// @desc    Delete menu
menuRouter.delete('/:id', deleteMenu);

export default menuRouter