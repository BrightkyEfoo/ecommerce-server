import { NextFunction, Request, Response } from 'express';
import { categoriesService } from './categories.service';
import { AppError } from '../../utils/Errors/AppError';
import { Categories } from './categories.model';
import { Products } from '../Products/products.model';

const create = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        const newCategory = await categoriesService.create(req.body);
        if (newCategory === 1) {
            return next(new AppError(
                'BAD_ENTRY',
                `Creation failed`,
                true,
            ));
        }
        res.status(201).json({ msg: 'successfully created a new category', category: newCategory });
    } catch (err: any) {
        const error = AppError.isAppError(err)
            ? err
            : new AppError('ERROR', `Unknown error \nReason : ${err}`, false);
        next(error);
    }
};


const listProductsByCategory = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        const limit = Number(req.query.limit as string) ?? 10;
        const page = Number(req.query.page) ?? 1;
        const category = await categoriesService.read(req.params.id);
        if (!category || category === 1) {
            return next(new AppError(
                'NOT_FOUND',
                `Can not find category, ask for administrator`,
                false,
            ));
        }
        const foundedProductsByCategory = await Products.find({ category: category.title })
            .exec();

        if (!foundedProductsByCategory) {
            return next(new AppError(
                'NOT_FOUND',
                `Can not find products, ask for administrator`,
                false,
            ));
        }

        const start = limit * (page - 1);
        const end = start + limit;
        const resProducts = foundedProductsByCategory.slice(start, end);

        if (!foundedProductsByCategory || foundedProductsByCategory.length === 0 || resProducts.length === 0) {
            return next(new AppError(
                'NOT_FOUND',
                `Can not find product, ask for administrator`,
                true,
            ));
        }
        await Products.countDocuments();
        res.json({
            msg: 'successfully founded products for category ' + category.title,
            products: resProducts,
            skip: start,
            limit,
            total: resProducts.length,
        });
    } catch (err: any) {
        const error = AppError.isAppError(err)
            ? err
            : new AppError('ERROR', `Unknown error \nReason : ${err}`, false);
        next(error);
    }
};

const readbyId = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        const category = await categoriesService.read(req.params.id as string);
        if (category === 1) {
            return next(new AppError(
                'BAD_ENTRY',
                `read failed`,
                true,
            ));
        }
        if (!category)
            return next(new AppError(
                'NOT_FOUND',
                `no category founded, ask for administrator`,
                true,
            ));

        return res.json({
            msg: 'success',
            category,
        });
    } catch (err: any) {
        const error = AppError.isAppError(err)
            ? err
            : new AppError('ERROR', `Unknown error \nReason : ${err}`, false);
        next(error);
    }
};

const update = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        const updatedCategory = await categoriesService.update(req.params.id, req.body.update);
        if (updatedCategory === 1) {
            return next(new AppError(
                'BAD_ENTRY',
                `update failed`,
                true,
            ));
        }
        if (!updatedCategory)
            return next(new AppError(
                'NOT_FOUND',
                `no category founded, ask for administrator`,
                true,
            ));
        return res.json({
            msg: 'succesfully update category',
            category: updatedCategory,
        });
    } catch (err: any) {
        const error = AppError.isAppError(err)
            ? err
            : new AppError('ERROR', `Unknown error \nReason : ${err}`, false);
        next(error);
    }
};

const deleteCatgory = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        const categoryDeleted = await categoriesService.delete(req.params.id as string);
        if (categoryDeleted === 1) {
            return next(new AppError(
                'BAD_ENTRY',
                `delete failed`,
                true,
            ));
        }
        if (!categoryDeleted)
            return next(new AppError(
                'NOT_FOUND',
                `no category founded, ask for administrator`,
                true,
            ));
        res.json({
            msg: 'Succesfully delete',
            count: categoryDeleted,
        });
    } catch (err: any) {
        const error = AppError.isAppError(err)
            ? err
            : new AppError('ERROR', `Unknown error \nReason : ${err}`, false);
        next(error);
    }
};

const listCategories = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        const limit = Number(req.query.limit as string) ?? 10;
        const page = Number(req.query.page) ?? 1;
        const skip = (page - 1) * limit;
        const foundedCategories = await Categories.find()
            .limit(limit)
            .skip(skip)
            .exec();

        if (!foundedCategories || foundedCategories.length === 0) {
            return next(new AppError(
                'NOT_FOUND',
                `Can not find categories, ask for administrator`,
                true,
            ));
        }
        const count = await Categories.countDocuments();

        res.json({
            msg: 'successfully founded categories',
            categories: foundedCategories,
            skip: limit * (page - 1),
            limit,
            total: count,
        });
    } catch (err: any) {
        const error = AppError.isAppError(err)
            ? err
            : new AppError('ERROR', `Unknown error \nReason : ${err}`, false);
        next(error);
    }
};

const categoriesController = {
    /**
     * create a product
     * @param req.body should have directly all required properties of a category
     */
    create,

    /** read a product by id
     * @param req.params should contain an id
     */
    read: readbyId,

    /**
     * Delete a product by id
     * @param req.params should contains an id props
     */
    delete: deleteCatgory,

    /** read a part of all products
     * be sure that before using this method you have add the property page to the body of the request
     */
    list: listCategories,

    listProducts: listProductsByCategory,

    /**
     * Update a product by id
     * @param req.params must have the id and an object called update where should be resgistred all needed changes
     */
    update,
};

export { categoriesController };