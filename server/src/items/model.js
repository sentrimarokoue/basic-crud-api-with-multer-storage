import mongoose from 'mongoose'

const Schema = mongoose.Schema;


var ItemsSchema = new Schema({
    itemName: {
        type: String,
    },
    itemPrice: {
        type: String,
    },
    picture: {
        type: String,
    },
    itemCategory: {
        type: String
    },
    publisherInfo: {
            publisherId:{
                type: String
            },
            publisherName:{
                first: String,
                last: String,
            },
            publisherEmail: {
                type: String
            },
            publisherPhone: {
                type: String
            }
        }
});

export default mongoose.model('Item', ItemsSchema);
