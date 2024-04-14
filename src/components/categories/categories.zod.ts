import { object, string } from 'zod';

const categoriesZodSchema = {
    create: object({
        body: object({
            title: string(),
            description: string().optional(),
            image: string().optional(),
        }),
    }),
    update: object({
        params: object({
            id: string(),
        }),
        body: object({
            update: object({
                title: string().min(1),
                description: string().optional(),
                image: string().optional(),
            }),
        }),
    }),
    delete: object({
        params: object({
            id: string(),
        }),
    }),
};


export { categoriesZodSchema };