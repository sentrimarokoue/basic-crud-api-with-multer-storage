import Item from "./model.js"
import helpers from './helpers.js'
import callbacks from './callbacks.js'

export default {
    getItems: (req, res, next) => {
        callbacks.getAllItems((error, doc) => {
            helpers.callback(error, doc, res);
        });
    },
    getItemsByCategory: (req, res, next) => {
        const id = req.params.id;
        callbacks.getItemsByCategory(id, (error, doc) => {
            helpers.callback(error, doc, res);
        });
    },
//Add Items
    addItem: (req, res) => {
        const { itemName, itemPrice, itemCategory } = req.body;
        var newItem = new Item({
            itemName: itemName,
            itemPrice: itemPrice,
            itemCategory: itemCategory,
            publisherInfo: {
                publisherId: req.user._id,
                publisherName: req.user.name,
                publisherEmail: req.user.email,
                publisherPhone: req.user.phone.number,
            },
            picture: req.file.path
        })

        newItem.save(function (err, savedItem) {
            helpers.callback(err, savedItem, res)
        })
    },


// Edit Items
    updateItem: (req, res, next) => {
        const data = req.body || {}
        const id = req.params.id;
        if (req.file != null) {
            data.picture = req.file.path;
        }
        callbacks.updateItems(id, data, (error, doc) => {
            helpers.callback(error, doc, res);
        });
    },

// Find Items By Id
    getItemById: (req, res, next) => {
        const id = req.params.id;
        callbacks.getItemsById(id, (error, doc) => {
            helpers.callback(error, doc, res);
        });
    },

// Delete Items By Id
    deleteItemById: (req, res, next) => {
        const id = req.params.id;
        callbacks.deleteItemsById(id, (error, doc) => {
            helpers.callback(error, doc, res);
        });
    }
}
