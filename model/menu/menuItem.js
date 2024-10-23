import mongoose from "mongoose";

const MenuItemSchema = mongoose.Schema({
    menu_item_name:{
        type:String,
        required:true
    },
    menu_item_description:{
        type:String,
        required:true
    },
    menu_item_price:{
        type:Number,
        required:true
    },
    menu_item_ingredient:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'MenuItemIngredient',
        required:true
    },
    menu :{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Menu',
        required:true
    }
})

const MenuItem =  mongoose.model('MenuItem',MenuItemSchema)

export default MenuItem