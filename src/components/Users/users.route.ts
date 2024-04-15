import { Router } from 'express';
import { validate } from '../../middlewares/validate';
import { userZodSchemas } from './users.zod';
import { usersController } from './users.controller';
import { hydradeBody, uploadSingle } from '../../middlewares/fileStore';

const router = Router();

router.post(['/auth/register', '/auth/signup', '/auth/sign-up'], [
        uploadSingle('profilePicture'),
        hydradeBody,
        validate(userZodSchemas.register),
    ],
    usersController.register,
);
router.post(['/auth/login', '/auth/signin', '/auth/sign-in'], validate(userZodSchemas.login), usersController.login);
router.route(['/:id/carts', '/:id/cart'])
    .post(validate(userZodSchemas.addCart), usersController.addCart)
    .get(validate(userZodSchemas.listCarts), usersController.listCarts);

export { router as usersRouter };
