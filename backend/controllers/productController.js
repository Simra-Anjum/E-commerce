import productModel from "../models/productModel.js";
import fs from 'fs'


const listClothes = async (req, res) => {
    try {
        const product = await productModel.find({})
        res.json({ success: true, data: product })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }

}


const addClothes = async (req, res) => {

    try {
        let image_filename = `${req.file.filename}`

        const products = new productModel({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            category:req.body.category,
            image: image_filename,
        })

        await products.save();
        res.json({ success: true, message: "Product Added" })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }
}


const removeClothes = async (req, res) => {
    try {

        const product = await productModel.findById(req.body.id);
        fs.unlink(`uploads/${product.image}`, () => { })

        await productModel.findByIdAndDelete(req.body.id)
        res.json({ success: true, message: "Product Removed" })

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }

}

export { listClothes, addClothes, removeClothes }