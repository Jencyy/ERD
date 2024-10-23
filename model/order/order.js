import mongoose from "mongoose";

const OrderSchema = mongoose.Schema({
    order_date_time: {
        type: Date,
        required: true
    },
    staff: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Staff',
        required: true
    },
    table: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Table',
        required: true
    },

})

const order = mongoose.model('Order',OrderSchema)
export default order