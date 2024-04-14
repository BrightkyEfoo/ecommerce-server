import { Schema, model } from 'mongoose';

export interface IProduct {
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
}

const ProductsSchema = new Schema<IProduct>({
    title: String,
    description: String,
    price: Number,
    discountPercentage: Number,
    rating: Number,
    stock: Number,
    brand: String,
    category: String,
    thumbnail: String,
    images: [String],
});

ProductsSchema.index({ title: 'text', description: 'text' });

const Products = model<IProduct>('Products', ProductsSchema);

export { Products };
