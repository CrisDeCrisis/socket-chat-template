import { Schema, model } from 'mongoose';

const messageSchema = new Schema({
    de: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    para: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    mensaje: {
        type: String,
        required: true,
    }
}, {
    timestamps: true,
});

messageSchema.methods.toJSON = function () {
    const { __v, ...object } = this.toObject();
    return object;
};

export const messageModel = model('Message', messageSchema);