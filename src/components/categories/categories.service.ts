import { Categories, ICategory } from './categories.model';

const createCategory = async (category: ICategory) => {
    try {
        return (await Categories.create(category)).toJSON();
    } catch (e) {
        console.error(`Error when creating a new category \nReason: ${e}`);
        return 1 as const;
    }
};

const deleteCategory = async (id: string) => {
    try {
        return await Categories.findByIdAndDelete(id);
    } catch (err) {
        console.error(`Error when deleting a category \nReason: ${err}`);
        return 1 as const;
    }
};

const update = async (id: string, update: any) => {
    try {
        const res = await Categories.findByIdAndUpdate(id, update, { new: true }).exec();
        console.log('res', res);
        return res;

    } catch (err) {
        console.error(`Error when updating a category \nReason: ${err}`);
        return 1 as const;
    }
};

const read = async (id: string) => {
    try {
        return await Categories.findById(id);
    } catch (err) {
        console.error(`Error when try to read a category \nReason: ${err}`);
        return 1 as const;
    }
};

const categoriesService = {
    create: createCategory,
    delete: deleteCategory,
    update,
    read,
};


export { categoriesService };
