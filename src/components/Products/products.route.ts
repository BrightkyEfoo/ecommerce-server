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
    .get(productsController.list);

router.route('/search').get(productsController.search);

router.use(authToken)
    .route('/:id')
    .put([
            verifyRolesMiddleware([
                {
                    obj: 'products',
                    permissions: ['update'],
                },
            ]),
            uploadM,
            hydradeBody,
        ],
        productsController.update)
    .delete(
        verifyRolesMiddleware([
            {
                obj: 'products',
                permissions: ['delete'],
            },
        ]),
        productsController.delete);

router
    .route('/:id').get(productsController.read);

export { router as productsRouter };

