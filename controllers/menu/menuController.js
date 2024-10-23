
import Menu from '../../model/menu/menu.js';
// Get all menus
export const getAllMenus = async (req, res) => {
    try {
        const menus = await Menu.find();
        res.json(menus);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get menu by ID
export const getMenuById = async (req, res) => {
    try {
        const menu = await Menu.findById(req.params.id);
        if (!menu) return res.status(404).json({ message: 'Menu not found' });
        res.json(menu);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Add new menu
export const addMenu = async (req, res) => {
    const newMenu = new Menu(req.body);
    try {
        const menu = await newMenu.save();
        res.status(201).json(menu);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update menu
export const updateMenu = async (req, res) => {
    try {
        const updatedMenu = await Menu.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedMenu) return res.status(404).json({ message: 'Menu not found' });
        res.json(updatedMenu);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete menu
export const deleteMenu = async (req, res) => {
    try {
        const deletedMenu = await Menu.findByIdAndDelete(req.params.id);
        if (!deletedMenu) return res.status(404).json({ message: 'Menu not found' });
        res.json({ message: 'Menu deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
