import mongoose from 'mongoose';

export const dbInit = async () => {
    try {
        if (!process.env.DB_URI || !process.env.DB_USER || !process.env.DB_PASSWORD) {
            return false;
        }
        await mongoose.connect(process.env.DB_URI, {
            auth: {
                username: process.env.DB_USER,
                password: process.env.DB_PASSWORD,
            },
        });
        return true;
    } catch (error: any) {
        console.error('error connecting Db', error);
        return false;
    }
};
