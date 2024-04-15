import bcrypt from 'bcrypt';
import { Schema, model } from 'mongoose';

export interface IUser {
    firstName: string;
    lastName: string;
    email: string;
    password?: string;
    profilePicture: string;
    roles: number[];
}

const usersSchema = new Schema<IUser>({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        unique: true,
    },
    password: String,
    profilePicture: String,
    roles: {
        type: [Number],
        default: [],
    },
});

usersSchema.pre('save', async function(next) {
    const utilisateur = this;

    if (!utilisateur.isModified('password') || !utilisateur.password) {
        return next();
    }

    try {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(utilisateur.password, salt);
        utilisateur.password = hash;
        return next();
    } catch (error: any) {
        return next(error);
    }
});

const Users = model<IUser>('Users', usersSchema);

export { Users };
