import { User } from '../models/user';

export class UserService {

    constructor() {
    }

    async findAll() {
        return await User.find({});
    }

    async createUser(userInformation: object) {
        const user = new User(userInformation);
        await user.save();
        return user;
    }

    async findOne(searchCriteria: object) {
        return await User.findOne(searchCriteria);
    }
};

