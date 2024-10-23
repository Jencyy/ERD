import express from "express";
import { 
    addIngredientType, 
    deleteIngredientType, 
    getAllIngredientTypes, 
    getIngredientTypeById, 
    updateIngredientType 
} from "../../controllers/ingredient/ingredientTypeController.js";

const IngredientTypeRouter = express.Router();

// @route   GET /api/ingredient-types
// @desc    Get all ingredient types
IngredientTypeRouter.get('/', getAllIngredientTypes);

// @route   GET /api/ingredient-types/:id
// @desc    Get ingredient type by ID
IngredientTypeRouter.get('/:id', getIngredientTypeById);

// @route   POST /api/ingredient-types
// @desc    Create new ingredient type
IngredientTypeRouter.post('/', addIngredientType);

// @route   PUT /api/ingredient-types/:id
// @desc    Update ingredient type by ID
IngredientTypeRouter.put('/:id', updateIngredientType);

// @route   DELETE /api/ingredient-types/:id
// @desc    Delete ingredient type by ID
IngredientTypeRouter.delete('/:id', deleteIngredientType);

export default IngredientTypeRouter;
