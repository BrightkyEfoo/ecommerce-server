import { model, Schema } from 'mongoose';
import { Products } from '../Products/products.model';

export interface ICart {
    user: string,
    total: number,
    discountedTotal: number,
    totalProducts: number,
    totalQuantity: number,
    products: {
        quantity: number,
        product: string
    }[]
}

const cartsSchema = new Schema<ICart>({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    products: [
        {
            product: { type: Schema.Types.ObjectId, ref: 'Product' },
            quantity: Number,
        },
    ],
    total: Number,
    totalProducts: Number,
    discountedTotal: Number,
    totalQuantity: Number,
});

cartsSchema.pre('save', async function(next) {
    const products = await Products.find({ _id: { $in: this.products.map(p => p.product) } }).exec();
    const { totalPrice, totalProducts, discountedPrice } = this.products.reduce((acc, product) => {
            const p = products.find(prod => prod._id.toString() === product.product.toString());
            if (!p) return acc;
            console.log('accumulator', acc);
            console.log('product : ', p);
            console.log(`${acc.discountedPrice} + ${product.quantity} * ${p.price} * (1 - ${p.discountPercentage} / 100) = ${acc.discountedPrice + product.quantity * p.price * (1 - p.discountPercentage / 100)}`)
            ;
            return {
                totalPrice: acc.totalPrice + product.quantity * p.price,
                totalProducts: acc.totalProducts + product.quantity,
                discountedPrice: acc.discountedPrice + product.quantity * p.price * (1 - p.discountPercentage / 100),
            };
        },
        { totalPrice: 0, totalProducts: 0, discountedPrice: 0 },
    );

    this.totalProducts = products.length;
    this.discountedTotal = discountedPrice;
    this.total = totalPrice;
    this.totalQuantity = totalProducts;
    next();
});


const Carts = model<ICart>('Cart', cartsSchema);

export { Carts };