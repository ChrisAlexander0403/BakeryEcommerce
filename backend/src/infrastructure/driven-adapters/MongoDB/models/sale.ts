import { model, Schema } from 'mongoose';

const saleSchema = new Schema({
    uuid: {
        type: String,
        required: true,
        unique: true
    },
    customer: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

export default model('Sale', saleSchema);