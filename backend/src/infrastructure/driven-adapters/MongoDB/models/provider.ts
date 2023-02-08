import { model, Schema } from 'mongoose';

const providerSchema = new Schema({
    uuid: {
        type: String,
        required: true,
        unique: true
    },
    fullName: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

export default model('Provider', providerSchema);