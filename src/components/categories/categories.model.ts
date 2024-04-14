import { Schema, model } from 'mongoose';

export interface ICategory {
    title: string;
    description?: string;
    image: string;
}

const categoriesSchema = new Schema<ICategory>({
    title: { type: String, unique: true },
    description: String,
    image: String,
});


const Categories = model<ICategory>('Categories', categoriesSchema);

export { Categories };
