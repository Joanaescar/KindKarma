const User = require('../models/user');

class UserService {
    constructor() {
    }

    async findAll() {
        return await User.find({});
    }

    async createUser(userInformation) {
        const user = new User(userInformation);
        await user.save();
        return user;
    }

    async findOne(searchCriteria) {
        return await User.findOne(searchCriteria);
    }
};

module.exports = UserService;