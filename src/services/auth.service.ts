import CryptoJS from "crypto-js";
import { UserService } from './user.service';
import { ExpressError } from '../errors/expressError';

export class AuthService {

    userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    async register(registerForm: any) {
        const { username, email, password } = registerForm;
        const hashedPassword = CryptoJS.HmacSHA256(password, 'changeme').toString(); //TODO(Joana): Alterar a key para um sitio seguro
        const user = await this.userService.createUser({ username, email, password: hashedPassword });
        if (!user) {
            throw new ExpressError('Ocorreu um erro inesperado', 400);
        }
        return user;
    }

    async login(loginForm: any) {
        const { email, password } = loginForm;
        const hashedPassword = CryptoJS.HmacSHA256(password, 'changeme').toString(); //TODO(Joana): Alterar a key para um sitio seguro
        const user = await this.userService.findOne({ email, password: hashedPassword });
        if (!user) {
            throw new ExpressError('Credenciais inválidas', 400);
        }
        return user;
    }
};
