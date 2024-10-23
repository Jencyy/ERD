import Ingredient from '../../model/ingredient/ingredients.js'

// Get all ingredients
export const getAllIngredients = async (req, res) => {
    try {
        const ingredients = await Ingredient.find().populate('ingredient_type');
        res.json(ingredients);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get ingredient by ID
export const getIngredientById = async (req, res) => {
    try {
        const ingredient = await Ingredient.findById(req.params.id).populate('ingredient_type');
        if (!ingredient) return res.status(404).json({ message: 'Ingredient not found' });
        res.json(ingredient);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Add new ingredient
export const addIngredient = async (req, res) => {
    const newIngredient = new Ingredient(req.body);
    try {
        const ingredient = await newIngredient.save();
        res.status(201).json(ingredient);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update ingredient
export const updateIngredient = async (req, res) => {
    try {
        const updatedIngredient = await Ingredient.findByIdAndUpdate(req.params.id, req.body, { new: true }).populate('ingredient_type');
        if (!updatedIngredient) return res.status(404).json({ message: 'Ingredient not found' });
        res.json(updatedIngredient);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete ingredient
export const deleteIngredient = async (req, res) => {
    try {
        const deletedIngredient = await Ingredient.findByIdAndDelete(req.params.id);
        if (!deletedIngredient) return res.status(404).json({ message: 'Ingredient not found' });
        res.json({ message: 'Ingredient deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
