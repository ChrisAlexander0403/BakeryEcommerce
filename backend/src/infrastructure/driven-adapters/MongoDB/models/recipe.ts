import { model, Schema } from 'mongoose';

const recipeSchema = new Schema({
    uuid: {
        type: String,
        required: true,
        unique: true
    },
    ingredients: [{
        ingredient: {
            type: String,
            required: true
        },
        qty: {
            type: Number,
            required: true
        }
    }]
}, {
    timestamps: true
});

export default model('Recipe', recipeSchema);