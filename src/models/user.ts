import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        maxLength: 60
    },
    email: {
        type: String,
        required: true,
        maxLength: 60
    },
    password: {
        type: String,
        required: true,
    },
    references: [{ type: Schema.Types.ObjectId, ref: 'Profile' }]
})

export const User = mongoose.model('User', userSchema);
