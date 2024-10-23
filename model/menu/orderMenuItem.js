import mongoose from "mongoose";

const OrderMenuItemSchema = mongoose.Schema({
    order_menu_item_quantity:{
        type:Number,
        required:true

    },
    order_menu_item_comments:{
        type:String,
        required:true
    },
    order :{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Order',
        required:true
    },
    menu_item:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'MenuItem',
        required:true
    }
})

const OrderMenuItem =  mongoose.model('OrderMenuItem',OrderMenuItemSchema)

export default OrderMenuItem