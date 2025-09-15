import express from 'express';
import { addClothes, listClothes, removeClothes } from '../controllers/productController.js';
import multer from 'multer';
const productRouter = express.Router();



const storage = multer.diskStorage({
    destination: 'uploads',
    filename: (req, file, cb) => {
        return cb(null,`${Date.now()}${file.originalname}`);
    }
})

const upload = multer({ storage: storage})

productRouter.get("/list",listClothes);
productRouter.post("/add",upload.single('image'),addClothes);
productRouter.post("/remove",removeClothes);

export default productRouter;