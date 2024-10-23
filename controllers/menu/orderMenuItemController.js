
import OrderMenuItem from "../../model/menu/orderMenuItem.js";
// Get all OrderMenuItems
export const getAllOrderMenuItems = async (req, res) => {
    try {
        const orderMenuItems = await OrderMenuItem.find().populate({
            path: 'order',
            populate: [
            { path: 'table' },
            { path: 'staff',
                populate: {
                    path:'staff_role'
                }
             }
            ]
}).populate({
    path:'menu_item',
    populate: {
        path:'menu'
    }
});
res.json(orderMenuItems);
    } catch (error) {
    res.status(500).json({ message: error.message });
}
};

// Get OrderMenuItem by ID
export const getOrderMenuItemById = async (req, res) => {
    try {
        const orderMenuItem = await OrderMenuItem.findById(req.params.id);
        if (!orderMenuItem) return res.status(404).json({ message: 'OrderMenuItem not found' });
        res.json(orderMenuItem);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Add new OrderMenuItem
export const addOrderMenuItem = async (req, res) => {
    const newOrderMenuItem = new OrderMenuItem(req.body);
    try {
        const savedOrderMenuItem = await newOrderMenuItem.save();
        res.status(201).json(savedOrderMenuItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update OrderMenuItem by ID
export const updateOrderMenuItem = async (req, res) => {
    try {
        const updatedOrderMenuItem = await OrderMenuItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedOrderMenuItem) return res.status(404).json({ message: 'OrderMenuItem not found' });
        res.json(updatedOrderMenuItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete OrderMenuItem by ID
export const deleteOrderMenuItem = async (req, res) => {
    try {
        const deletedOrderMenuItem = await OrderMenuItem.findByIdAndDelete(req.params.id);
        if (!deletedOrderMenuItem) return res.status(404).json({ message: 'OrderMenuItem not found' });
        res.json({ message: 'OrderMenuItem deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
