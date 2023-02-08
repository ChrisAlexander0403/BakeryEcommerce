import { model, Schema } from 'mongoose';

const productSchema = new Schema({
    uuid: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    recipe: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    cost: {
        type: Number,
        required: true
    },
    inStock: {
        type: Number,
        requierd: true
    }
}, {
    timestamps: true
});

export default model('Product', productSchema);