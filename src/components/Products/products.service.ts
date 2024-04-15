import { IProduct, Products } from './products.model';

const create = async (product: IProduct) => {
    try {
        return await Products.create(product);
    } catch (error) {
        console.error(`Error when storing a product to db \nReason : ${error}`);
        return 1 as const;
    }
};

const deleteProduct = async (id: string) => {
    try {
        const res = await Products.findByIdAndDelete(id);
        if (!res) return 1 as const;
        return res;
    } catch (error) {
        console.error(`Error when deleting a product to db \nReason : ${error}`);
        return 1 as const;
    }
};

const updateProduct = async (id: string, updateObj: any) => {
    try {
        const res = await Products.findByIdAndUpdate(id, updateObj, {
            new: true,
        });
        if (!res) return 1 as const;
        return res;
    } catch (error) {
        console.error(`Error when updating a product to db \nReason : ${error}`);
        return 1 as const;
    }
};

const searchProducts = async (str: string) => {
    try {
        return await Products.find({
            $text: {
                $search: str,
                $caseSensitive: false,
            },
        }).exec();
    } catch (e) {
        console.error(`An error occurred while searching for products: ${e.message}`);
        return 1 as const;
    }
};

const productsService = {
    create,
    update: updateProduct,
    delete: deleteProduct,
    search: searchProducts,
};

export { productsService };
