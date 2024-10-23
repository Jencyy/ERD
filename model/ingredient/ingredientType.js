import mongoose from "mongoose";

const ingredientTypeSchema = mongoose.Schema({
    ingredient_type:{
        type:String,
        require:true
    }
})
const IngredientType = mongoose.model('IngredientType', ingredientTypeSchema);

export default IngredientType