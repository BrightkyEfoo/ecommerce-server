import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { randomUUID } from 'node:crypto';
import { AppError } from '../../utils/Errors/AppError';
import { usersService } from './users.service';
import { Users } from './users.model';
import { Carts, ICart } from '../Carts/carts.model';

const register = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userRes = await usersService.create(req.body);
        if (userRes === 1) {
            throw new AppError('ERROR', `Something went wrong on db when creating user`, true);
        }
        res.status(201).json({
            msg: 'successfully created a new user',
            user: userRes,
        });
    } catch (err: any) {
        const error = AppError.isAppError(err)
            ? err
            : new AppError('ERROR', `Unknown error \nReason : ${err}`, false);
        next(error);
    }
};

const login = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email, password } = req.body;
        const credentials = { email, password };
        const loginResponse = await usersService.login(credentials);
        if (loginResponse === 1 || loginResponse === 2) {
            throw new AppError(
                'NOT_AUTHORIZED',
                'Either your email or your password is incorrect',
                true,
            );
        }

        // generate JWT token
        const private_key = process.env.PRIVATE_KEY;
        if (!private_key) {
            throw new AppError(
                'BAD_ENTRY',
                'Env variable PRIVATE_KEY should be defined',
                false,
            );
        }
        const token = jwt.sign(
            {
                userId: loginResponse._id,
                random: randomUUID(),
                appName: 'ecommerce',
                roles: loginResponse.roles,
            },
            private_key,
            { expiresIn: '24h' },
        );

        res.json({
            msg: 'Succesfully logged in',
            token,
            user: loginResponse,
        });
    } catch (err: any) {
        const error = AppError.isAppError(err)
            ? err
            : new AppError('ERROR', `Unknown error \nReason : ${err}`, false);
        next(error);
    }
};

const addCart = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id;
        const user = await Users.findById(id);
        if (!user) return next(new AppError(
            'NOT_FOUND',
            `User not found, ask for administrator`,
            true,
        ));
        const newCart = await Carts.create({
            user: id,
            products: req.body.products,
        });

        return res.status(201).json({ msg: 'success', cart: newCart });

    } catch (err: any) {
        const error = AppError.isAppError(err)
            ? err
            : new AppError('ERROR', `Unknown error \nReason : ${err}`, true);
        next(error);
    }
};

const listCarts = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const limit = Number(req.query.limit as string) ?? 10;
        const page = Number(req.query.page) ?? 1;
        const skip = (page - 1) * limit;
        const id = req.params.id;

        const user = await Users.findById(id);
        if (!user) return next(new AppError(
            'NOT_FOUND',
            `User not found, ask for administrator`,
            true,
        ));

        const carts = await Carts.find({ user: id })
            .skip(skip)
            .limit(limit)
            .populate({
                path: 'products',
                populate: {
                    path: 'product',
                    model: 'Products',
                },
            })
            .exec();

        if (carts.length === 0) {
            return next(new AppError(
                'NOT_FOUND',
                `Can not find cart, ask for administrator`,
                true,
            ));
        }

        const data = carts.map((cart) => {
            const products = cart.toJSON().products.map(p => {
                // @ts-ignore
                return { ...p.product, quantity: p.quantity };
            });
            return { ...cart.toJSON(), products };
        });

        return res.json({ msg: 'success', carts: data, total: carts.length, skip, limit });

    } catch (err: any) {
        const error = AppError.isAppError(err)
            ? err
            : new AppError('ERROR', `Unknown error \nReason : ${err}`, true);
        next(error);
    }
};

const usersController = {
    register,
    login,
    addCart,
    listCarts,
};

export { usersController };
