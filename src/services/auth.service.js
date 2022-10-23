const CryptoJS = require("crypto-js");
const UserService = require('./user.service');

class AuthService {
    constructor() {
        this.userService = new UserService();
    }

    async register(registerForm) {
        const { username, email, password } = registerForm;
        const hashedPassword = CryptoJS.HmacSHA256(password, 'changeme').toString(); //TODO(Joana): Alterar a key para um sitio seguro
        const user = await this.userService.createUser({ username, email, password: hashedPassword });
        return user;
    }

    async login(loginForm) {
        const { email, password } = loginForm;
        const hashedPassword = CryptoJS.HmacSHA256(password, 'changeme').toString(); //TODO(Joana): Alterar a key para um sitio seguro
        const user = await this.userService.findOne({ email, password: hashedPassword });
        return user;
    }
};

module.exports = AuthService;