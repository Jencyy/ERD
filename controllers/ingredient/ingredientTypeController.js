import IngredientType from "../../model/ingredient/ingredientType.js";


// Get all IngredientTypes
export const getAllIngredientTypes = async (req, res) => {
    try {
        const ingredientTypes = await IngredientType.find();
        res.json(ingredientTypes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get IngredientType by ID
export const getIngredientTypeById = async (req, res) => {
    try {
        const ingredientType = await IngredientType.findById(req.params.id);
        if (!ingredientType) return res.status(404).json({ message: 'IngredientType not found' });
        res.json(ingredientType);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Add new IngredientType
export const addIngredientType = async (req, res) => {
    const newIngredientType = new IngredientType(req.body);
    try {
        const savedIngredientType = await newIngredientType.save();
        res.status(201).json(savedIngredientType);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update IngredientType by ID
export const updateIngredientType = async (req, res) => {
    try {
        const updatedIngredientType = await IngredientType.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedIngredientType) return res.status(404).json({ message: 'IngredientType not found' });
        res.json(updatedIngredientType);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete IngredientType by ID
export const deleteIngredientType = async (req, res) => {
    try {
        const deletedIngredientType = await IngredientType.findByIdAndDelete(req.params.id);
        if (!deletedIngredientType) return res.status(404).json({ message: 'IngredientType not found' });
        res.json({ message: 'IngredientType deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
