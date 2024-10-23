import Table from "../../model/table/table.js";

// Get all Tables
export const getAllTables = async (req, res) => {
    try {
        const tables = await Table.find();
        res.json(tables);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get Table by ID
export const getTableById = async (req, res) => {
    try {
        const table = await Table.findById(req.params.id);
        if (!table) return res.status(404).json({ message: 'Table not found' });
        res.json(table);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Add new Table
export const addTable = async (req, res) => {
    const newTable = new Table(req.body);
    try {
        const savedTable = await newTable.save();
        res.status(201).json(savedTable);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update Table by ID
export const updateTable = async (req, res) => {
    try {
        const updatedTable = await Table.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedTable) return res.status(404).json({ message: 'Table not found' });
        res.json(updatedTable);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete Table by ID
export const deleteTable = async (req, res) => {
    try {
        const deletedTable = await Table.findByIdAndDelete(req.params.id);
        if (!deletedTable) return res.status(404).json({ message: 'Table not found' });
        res.json({ message: 'Table deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
