import MenuItem from "../../model/menu/menuItem.js";
// Get all MenuItems
export const getAllMenuItems = async (req, res) => {
    try {
        const menuItems = await MenuItem.find().populate('menu').populate({
            path: 'menu_item_ingredient',
            populate: [
                {
                    path: 'menu_item',
                    populate: {
                        path: 'menu',
                    }
                },
                {
                    path: 'ingredient',
                    populate: {
                        path: 'ingredient_type'
                    }
                }
            ]
        });
        res.json(menuItems);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get MenuItem by ID
export const getMenuItemById = async (req, res) => {
    try {
        const menuItem = await MenuItem.findById(req.params.id).populate('menu');
        if (!menuItem) return res.status(404).json({ message: 'MenuItem not found' });
        res.json(menuItem);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Add new MenuItem
export const addMenuItem = async (req, res) => {
    const newMenuItem = new MenuItem(req.body);
    try {
        const savedMenuItem = await newMenuItem.save();
        res.status(201).json(savedMenuItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update MenuItem by ID
export const updateMenuItem = async (req, res) => {
    try {
        const updatedMenuItem = await MenuItem.findByIdAndUpdate(req.params.id, req.body, { new: true }).populate('menu');
        if (!updatedMenuItem) return res.status(404).json({ message: 'MenuItem not found' });
        res.json(updatedMenuItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete MenuItem by ID
export const deleteMenuItem = async (req, res) => {
    try {
        const deletedMenuItem = await MenuItem.findByIdAndDelete(req.params.id);
        if (!deletedMenuItem) return res.status(404).json({ message: 'MenuItem not found' });
        res.json({ message: 'MenuItem deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
