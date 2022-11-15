import mongoose from 'mongoose';

const profileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxLength: 60
    },
    enabled: {
        type: Boolean,
        required: true,
    },

})

export const Profile = mongoose.model('Profile', profileSchema);
