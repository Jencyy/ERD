import express from 'express';
import { addTable, deleteTable, getAllTables, getTableById, updateTable } from '../../controllers/table/tableController.js';
const TableRouter = express.Router();


// @route   GET /api/tables
// @desc    Get all tables
TableRouter.get('/', getAllTables);

// @route   GET /api/tables/:id
// @desc    Get table by ID
TableRouter.get('/:id', getTableById);

// @route   POST /api/tables
// @desc    Add new table
TableRouter.post('/', addTable);

// @route   PUT /api/tables/:id
// @desc    Update table
TableRouter.put('/:id', updateTable);

// @route   DELETE /api/tables/:id
// @desc    Delete table
TableRouter.delete('/:id', deleteTable);


export default TableRouter;