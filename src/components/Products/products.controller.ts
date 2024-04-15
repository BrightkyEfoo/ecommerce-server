import { NextFunction, Request, Response } from 'express';
import { productsService } from './products.service';
import { AppError } from '../../utils/Errors/AppError';
import { Products } from './products.model';
import { Categories } from '../categories/categories.model';

const createProduct = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        if (req.body.category) {
            const category = await Categories.findOne({
                title: req.body.category,
            });
            if (!category)
                return next(new AppError(
                    'NOT_FOUND',
                    `no category founded, ask for administrator`,
                    true,
                ));
        }
        const newProduct = await productsService.create(req.body);
        if (newProduct === 1) {
            return next(new AppError(
                'BAD_ENTRY',
                `Can not create product, ask for administrator`,
                false,
            ));
        }
        res.status(201).json({
            msg: 'successfully created a new product',
            product: newProduct,
        });
    } catch (err: any) {
        const error = AppError.isAppError(err)
            ? err
            : new AppError('ERROR', `Unknown error \nReason : ${err}`, false);
        next(error);
    }
};

const deleteProduct = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        const deletedProduct = await productsService.delete(req.params.id as string);
        if (deletedProduct === 1) {
            return next(new AppError(
                'BAD_ENTRY',
                `Can not delete product, ask for administrator`,
                true,
            ));
        }
        res.json({
            msg: 'successfully deleted a product',
            product: deletedProduct,
        });
    } catch (err: any) {
        const error = AppError.isAppError(err)
            ? err
            : new AppError('ERROR', `Unknown error \nReason : ${err}`, false);
        next(error);
    }
};

const updateProduct = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        if (req.body.update.category) {
            const category = await Categories.findOne({
                title: req.body.update.category,
            });
            if (!category)
                return next(new AppError(
                    'NOT_FOUND',
                    `no category founded, ask for administrator`,
                    true,
                ));
        }
        const updatedProduct = await productsService.update(
            req.params.id,
            req.body.update,
        );
        if (updatedProduct === 1) {
            return next(new AppError(
                'BAD_ENTRY',
                `Can not update product, ask for administrator`,
                false,
            ));
        }
        if (!updatedProduct) {
            return next(new AppError(
                'NOT_FOUND',
                `no product founded, ask for administrator`,
                false,
            ));
        }
        res.json({
            msg: 'successfully updated a product',
            product: updatedProduct,
        });
    } catch (err: any) {
        const error = AppError.isAppError(err)
            ? err
            : new AppError('ERROR', `Unknown error \nReason : ${err}`, false);
        next(error);
    }
};

const readProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id;
        const foundedProduct = await Products.findById(id);

        if (!foundedProduct) {
            return next(new AppError(
                'NOT_FOUND',
                `Can not find product, ask for administrator`,
                true,
            ));
        }
        res.json({
            msg: 'successfully founded a product',
            product: foundedProduct,
        });
    } catch (err: any) {
        const error = AppError.isAppError(err)
            ? err
            : new AppError('ERROR', `Unknown error \nReason : ${err}`, false);
        next(error);
    }
};


const searchProducts = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        const { q } = req.query;
        const limit = Number(req.query.limit) ?? 10;
        const page = Number(req.query.page) ?? 1;
        if (typeof q !== 'string')
            return next(new AppError(
                'BAD_ENTRY',
                `Bad argument for q string`,
                true,
            ));

        const foundedProducts = await productsService.search(q);
        if (foundedProducts === 1) {
            return next(new AppError(
                'BAD_ENTRY',
                `Error search`,
                true,
            ));
        }
        const start = (page - 1) * limit;
        const end = start + limit;
        const resultProducts = foundedProducts.slice(start, end);
        console.log({
            start,
            end,
            foundedProducts,
            resultProducts,
        });
        if (!foundedProducts || foundedProducts.length === 0 || resultProducts.length === 0) {
            return next(new AppError(
                'NOT_FOUND',
                `Can not find product, ask for administrator`,
                true,
            ));
        }
        return res.json({
            msg: `Result of search in products for ${q}`,
            products: resultProducts,
            skip: start,
            limit,
            total: foundedProducts.length,
        });
    } catch (err: any) {
        const error = AppError.isAppError(err)
            ? err
            : new AppError('ERROR', `Unknown error \nReason : ${err}`, false);
        next(error);
    }
};


const readProducts = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        const limit = Number(req.query.limit as string) ?? 10;
        const page = Number(req.query.page) ?? 1;
        const skip = (page - 1) * limit;
        const foundedProducts = await Products.find()
            .limit(limit)
            .skip(skip)
            .exec();

        if (!foundedProducts) {
            return next(new AppError(
                'NOT_FOUND',
                `Can not find products, ask for administrator`,
                false,
            ));
        }

        if (!foundedProducts || foundedProducts.length === 0) {
            return next(new AppError(
                'NOT_FOUND',
                `Can not find product, ask for administrator`,
                true,
            ));
        }

        const count = await Products.countDocuments();

        res.json({
            msg: 'successfully founded products',
            products: foundedProducts,
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

/**
 * All methods of this object that needs to work with and image should first pass
 * to a middleware that will handle that image and provide the url inside de body of the request
 */
const productsController = {
    /**
     * create a product
     * @param req.body should have directly all required properties of a product
     */
    create: createProduct,

    /**
     * Delete a product by id
     * @param req.params should contains an id props
     */
    delete: deleteProduct,

    /**
     * Update a product by id
     * @param req.params must have the id and an object called update where should be resgistred all needed changes
     */
    update: updateProduct,

    /** read a product by id
     * @param req.params should contain an id
     */
    read: readProduct,

    /** read a part of all products
     * be sure that before using this method you have add the property page to the body of the request
     */
    list: readProducts,

    /** search a product
     * @param req.query.q use it by passing the q keyword to the request query. You can provide a limit too, the default limit is 10
     */
    search: searchProducts,
};

export { productsController };
