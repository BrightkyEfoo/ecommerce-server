import { Router } from 'express';
import { authToken } from '../../middlewares/jwt';
import { verifyRolesMiddleware } from '../../middlewares/verifyRoles';
import { hydradeBody, upload } from '../../middlewares/fileStore';
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
            upload.single('image'),
            hydradeBody,
            validate(categoriesZodSchema.create),
        ],
        categoriesController.create,
    )

    .get(categoriesController.list);

router.use(authToken).route('/:id')
    .put([
            verifyRolesMiddleware([
                {
                    obj: 'categories',
                    permissions: ['update'],
                },
            ]),
            upload.single('image'),
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
    ], categoriesController.delete);


router.route('/:id').get(categoriesController.read);

router.route(['/:id/products', '/:id/product']).get(categoriesController.listProducts);

export { router as categoriesRouter };

