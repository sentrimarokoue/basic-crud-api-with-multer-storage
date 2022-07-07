import itemsController from './controller.js';
import Router from 'express';
import helper from './helpers.js'

const router = Router();

router.get("/getItems", itemsController.getItems);
router.get("/getItems/:id", itemsController.getItemById);
router.get("/getCategory/:id", itemsController.getItemsByCategory);

router.post("/addItem", helper.upload.single('picture'), itemsController.addItem);
router.patch("/updateItem/:id", helper.upload.single('picture'), itemsController.updateItem);
router.delete("/deleteItem/:id", itemsController.deleteItemById);

export default router;