import { Router } from 'express';
import { validate } from '../../middlewares/validate';
import { productsZodSchemas } from './products.zod';
import { productsController } from './products.controller';
import { hydradeBody, uploadM } from '../../middlewares/fileStore';
import { authToken } from '../../middlewares/jwt';
import { verifyRolesMiddleware } from '../../middlewares/verifyRoles';

const router = Router();

router
    .route('/')
    .post(
        [
            authToken,
            verifyRolesMiddleware([
                {
                    obj: 'products',
                    permissions: ['create'],
                },
            ]),
            uploadM,
            hydradeBody,
            validate(productsZodSchemas.create),
        ],
        productsController.create,
    )
    .get(
        validate(productsZodSchemas.list),
        productsController.list,
    );

router.route('/search')
    .get(
        validate(productsZodSchemas.search),
        productsController.search,
    );

router.route('/:id')
    .get(
        validate(productsZodSchemas.readById),
        productsController.read,
    );

router.use(authToken)
    .route('/:id')
    .put(
        [
            verifyRolesMiddleware([
                {
                    obj: 'products',
                    permissions: ['update'],
                },
            ]),
            uploadM,
            hydradeBody,
            validate(productsZodSchemas.update),
        ],
        productsController.update,
    )
    .delete(
        [
            verifyRolesMiddleware([
                {
                    obj: 'products',
                    permissions: ['delete'],
                },
            ]),
            validate(productsZodSchemas.delete),
        ],
        productsController.delete,
    );


export { router as productsRouter };

