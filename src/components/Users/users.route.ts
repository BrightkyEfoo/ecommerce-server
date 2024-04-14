import { Router } from 'express';
import { validate } from '../../middlewares/validate';
import { userZodSchemas } from './users.zod';
import { usersController } from './users.controller';

const router = Router();

router.post(['/auth/register', '/auth/signup', '/auth/sign-up'], validate(userZodSchemas.register), usersController.register);
router.post(['/auth/login', '/auth/signin', '/auth/sign-in'], validate(userZodSchemas.login), usersController.login);
router.route(['/:id/carts', '/:id/cart'])
    .post(usersController.addCart)
    .get(usersController.listCarts);

export { router as usersRouter };
