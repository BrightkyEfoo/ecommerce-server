import { any, array, number, object, string } from 'zod';

const productsZodSchemas = {
    create: object({
        file: any(),
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
};

export { productsZodSchemas };
