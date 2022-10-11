const mongoose = require('mongoose');

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

const Profile = mongoose.model('Profile', profileSchema);
module.exports = Profile;