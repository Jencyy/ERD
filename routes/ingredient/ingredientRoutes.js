import express from 'express';
import { addIngredient, deleteIngredient, getAllIngredients, getIngredientById, updateIngredient } from '../../controllers/ingredient/ingredientController.js';
const IngredientRouter = express.Router();

// @route   GET /api/ingredients
// @desc    Get all ingredients
IngredientRouter.get('/', getAllIngredients);

// @route   GET /api/ingredients/:id
// @desc    Get ingredient by ID
IngredientRouter.get('/:id', getIngredientById);

// @route   POST /api/ingredients
// @desc    Add new ingredient
IngredientRouter.post('/', addIngredient);

// @route   PUT /api/ingredients/:id
// @desc    Update ingredient
IngredientRouter.put('/:id', updateIngredient);

// @route   DELETE /api/ingredients/:id
// @desc    Delete ingredient
IngredientRouter.delete('/:id', deleteIngredient);

export default IngredientRouter;
