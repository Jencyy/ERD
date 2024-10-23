import express from 'express';
import { 
    addMenuItemIngredient, 
    deleteMenuItemIngredient, 
    getAllMenuItemIngredients, 
    getMenuItemIngredientById, 
    updateMenuItemIngredient 
} from '../../controllers/ingredient/menuItemIngredientController.js';

const menuItemIngredientsRoutes = express.Router();

// @route   GET /api/menu-item-ingredients
// @desc    Get all menu item ingredients
menuItemIngredientsRoutes.get('/', getAllMenuItemIngredients);

// @route   GET /api/menu-item-ingredients/:id
// @desc    Get menu item ingredient by ID
menuItemIngredientsRoutes.get('/:id', getMenuItemIngredientById);

// @route   POST /api/menu-item-ingredients
// @desc    Add new menu item ingredient
menuItemIngredientsRoutes.post('/', addMenuItemIngredient);

// @route   PUT /api/menu-item-ingredients/:id
// @desc    Update menu item ingredient by ID
menuItemIngredientsRoutes.put('/:id', updateMenuItemIngredient);

// @route   DELETE /api/menu-item-ingredients/:id
// @desc    Delete menu item ingredient by ID
menuItemIngredientsRoutes.delete('/:id', deleteMenuItemIngredient);

export default menuItemIngredientsRoutes;
