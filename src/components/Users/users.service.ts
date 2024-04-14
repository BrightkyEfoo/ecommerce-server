import { IUser, Users } from './users.model';
import bcrypt from 'bcrypt';
import { AppError } from '../../utils/Errors/AppError';
import { Carts, ICart } from '../Carts/carts.model';

const create = async (user: IUser) => {
    try {
        const newUser = await Users.create(user);
        delete newUser.password;
        return newUser;
    } catch (e) {
        console.error(`Error when trying to save user to db \nReason:${e}`);
        return 1 as const;
    }
};

/**
 * Function to login
 * @param credentials onjet compose de email et password
 * @returns 1 if user not found
 * @returns 2 if password not match
 * @returns user if user found
 */
const login = async (credentials: { email: string; password: string }) => {
    try {
        const { email, password } = credentials;

        const user = await Users.findOne({ email });
        if (!user) {
            // user not found
            return 1 as const;
        }

        const resultOfComparison = await bcrypt.compare(
            password,
            user.password || '',
        );

        if (!resultOfComparison) {
            // password dont match
            return 2 as const;
        }

        const userCopy = user.toJSON();
        delete userCopy.password;
        return userCopy;
    } catch (e) {
        throw new AppError('ERROR', 'unknown Error', false);
    }
};


const usersService = {
    create,
    login,
};

export { usersService };
