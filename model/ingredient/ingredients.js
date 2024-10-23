import mongoose from "mongoose";

const ingredientSchema = mongoose.Schema({
    ingredient_name: {
        type: String,
        required: true
    },
    ingredient_type: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"IngredientType",
        required:true
    }
})

const ingredient = mongoose.model('Ingredient',ingredientSchema)

export default ingredient