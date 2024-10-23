import MenuItemIngredient from "../../model/ingredient/menuItemIngredient.js";

// Get all MenuItemIngredients
export const getAllMenuItemIngredients = async (req, res) => {
    try {
        const menuItemIngredients = await MenuItemIngredient.find().populate({
            path:'menu_item',
            populate:{
                path:'menu'
            }
        }).populate({
            path: 'ingredient',
            populate:{
                path:'ingredient_type'
            }
        });
        res.json(menuItemIngredients);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get MenuItemIngredient by ID
export const getMenuItemIngredientById = async (req, res) => {
    try {
        const menuItemIngredient = await MenuItemIngredient.findById(req.params.id).populate({
            path:'menu_item',
            populate:{
                path:'menu'
            }
        }).populate({
            path: 'ingredient',
            populate:{
                path:'ingredient_type'
            }
        });
        if (!menuItemIngredient) return res.status(404).json({ message: 'MenuItemIngredient not found' });
        res.json(menuItemIngredient);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Add new MenuItemIngredient
export const addMenuItemIngredient = async (req, res) => {
    const newMenuItemIngredient = new MenuItemIngredient(req.body);
    try {
        const savedMenuItemIngredient = await newMenuItemIngredient.save();
        res.status(201).json(savedMenuItemIngredient);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update MenuItemIngredient by ID
export const updateMenuItemIngredient = async (req, res) => {
    try {
        const updatedMenuItemIngredient = await MenuItemIngredient.findByIdAndUpdate(req.params.id, req.body, { new: true }).populate({
            path:'menu_item',
            populate:{
                path:'menu'
            }
        }).populate({
            path: 'ingredient',
            populate:{
                path:'ingredient_type'
            }
        });
        if (!updatedMenuItemIngredient) return res.status(404).json({ message: 'MenuItemIngredient not found' });
        res.json(updatedMenuItemIngredient);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete MenuItemIngredient by ID
export const deleteMenuItemIngredient = async (req, res) => {
    try {
        const deletedMenuItemIngredient = await MenuItemIngredient.findByIdAndDelete(req.params.id);
        if (!deletedMenuItemIngredient) return res.status(404).json({ message: 'MenuItemIngredient not found' });
        res.json({ message: 'MenuItemIngredient deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
