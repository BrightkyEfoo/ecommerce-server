import { Router } from 'express';
import { authToken } from '../../middlewares/jwt';
import { verifyRolesMiddleware } from '../../middlewares/verifyRoles';
import { hydradeBody, uploadSingle } from '../../middlewares/fileStore';
import { validate } from '../../middlewares/validate';
import { categoriesZodSchema } from './categories.zod';
import { categoriesController } from './categories.controller';

const router = Router();

router
    .route('/')
    .post(
        [
            authToken,
            verifyRolesMiddleware([
                {
                    obj: 'categories',
                    permissions: ['create'],
                },
            ]),
            uploadSingle('image'),
            hydradeBody,
            validate(categoriesZodSchema.create),
        ],
        categoriesController.create,
    )

    .get(
        validate(categoriesZodSchema.getAll),
        categoriesController.list,
    );

router.use(authToken).route('/:id')
    .put([
            verifyRolesMiddleware([
                {
                    obj: 'categories',
                    permissions: ['update'],
                },
            ]),
            uploadSingle('image'),
            hydradeBody,
            validate(categoriesZodSchema.update),
        ],
        categoriesController.update)

    .delete([
            verifyRolesMiddleware([
                {
                    obj: 'categories',
                    permissions: ['delete'],
                },
            ]),
            validate(categoriesZodSchema.delete),
        ],
        categoriesController.delete);


router.route('/:id').get(
    validate(categoriesZodSchema.getOne),
    categoriesController.read,
);

router.route(['/:id/products', '/:id/product']).get(
    validate(categoriesZodSchema.getAllProducts),
    categoriesController.listProducts,
);

export { router as categoriesRouter };

