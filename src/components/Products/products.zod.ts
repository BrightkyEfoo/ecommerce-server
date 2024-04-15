import { any, array, number, object, string } from 'zod';

const productsZodSchemas = {
    create: object({
        body: object({
            title: string(),
            description: string(),
            price: number(),
            discountPercentage: number(),
            rating: number(),
            stock: number(),
            brand: string(),
            category: string().optional(),
            thumbnail: string().optional(),
            images: array(string()).optional(),
        }),

    }),
    update: object({
        params: object({
            id: string(),
        }),
        body: object({
            update: object({
                title: string(),
                description: string(),
                price: number(),
                discountPercentage: number(),
                rating: number(),
                stock: number(),
                brand: string(),
                category: string().optional(),
                thumbnail: string().optional(),
                images: array(string()).optional(),
            }),
        }),
    }),
    list: object({
        query: object({
            limit: string().regex(/^\d+$/).optional(),
            page: string().regex(/^\d+$/).optional(),
        }).optional(),
    }),
    search: object({
        query: object({
            q: string(),
            limit: string().regex(/^\d+$/).optional(),
            page: string().regex(/^\d+$/).optional(),
        }),
    }),
    delete: object({
        params: object({
            id: string(),
        }),
    }),
    readById: object({
        params: object({
            id: string(),
        }),
    }),
};

export { productsZodSchemas };
