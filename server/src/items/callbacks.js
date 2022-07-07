import ItemsSchema from "./model.js";

export default {

    getAllItems : (callback) => {
        ItemsSchema.find({})
            .exec(callback);
    },
    getItemsByCategory : (category, callback) => {
        ItemsSchema.find({itemCategory: category})
            .exec(callback);
    },

    updateItems : (id, data, callback) => {
        ItemsSchema.findByIdAndUpdate(id, {$set: data}, {new: true}, callback);
    },

    deleteItemsById : (id, callback) => {
        ItemsSchema.findByIdAndDelete(id, callback);
    },

    getItemsById : (id, callback) => {
        ItemsSchema.findById(id, callback);
    }
}