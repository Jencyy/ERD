import mongoose from "mongoose";

const TableSchema = new mongoose.Schema({
    table_number: { type: Number, required: true },
    table_details: { type: String, required: true },
});

const table = mongoose.model('Table', TableSchema);

export default table
