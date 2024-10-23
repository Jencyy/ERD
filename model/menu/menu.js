import mongoose from "mongoose";

const menuSchema = mongoose.Schema({
    last_updated_menu_date:{
        type:String,
        require:true
    }
})

const menu = mongoose.model('Menu',menuSchema);
 export default menu;