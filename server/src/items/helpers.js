import multer from 'multer'

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, 'server/src/images');
    },
    filename: function (req, file, callback) {
        callback(null,"neuItem_"+ Date.now()+".jpg");
    },
});
export default {
    upload: multer({
        storage: storage,
        limits: {
            fieldSize: 1024 * 1024 * 3,
        },
    }),
    callback: (error, doc, res) => {
        if (error) {
            res.status(500).json(error);
        } else {
            res.status(200).json(doc);
        }
    }
}

