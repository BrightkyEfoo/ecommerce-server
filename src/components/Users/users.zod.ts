import { array, number, object, string } from 'zod';

const userZodSchemas = {
    register: object({
        body: object({
            email: string().email(),
            password: string().min(8),
            lastName: string(),
            firstName: string(),
        }),
    }),
    login: object({
        body: object({
            email: string().email(),
            password: string().min(8),
        }),
    }),

    addCart: object({
        params: object({
            id: string(),
        }),
        body: object({
            products: array(object({
                quantity: number().min(1),
                product: string().min(1),
            })),
        }),
    }),
    listCarts: object({
        params: object({
            id: string(),
        }),
    }),
};


export { userZodSchemas };
