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
    getOne: object({
        params: object({
            id: string(),
        }),
    }),
    getAllProducts: object({
        params: object({
            id: string(),
        }),
        query: object({
            limit: string().regex(/^\d+$/).optional(),
            page: string().regex(/^\d+$/).optional(),
        }).optional(),
    }),
    getAll: object({
        query: object({
            limit: string().regex(/^\d+$/).optional(),
            page: string().regex(/^\d+$/).optional(),
        }).optional(),
    }),

};


export { categoriesZodSchema };