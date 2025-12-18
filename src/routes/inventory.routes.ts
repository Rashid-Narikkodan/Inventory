import Product from "../models/product.model"
import express, { Router, Request, Response } from "express"
import { CreateProductDTO } from '../types/Product'

const route: Router = express.Router();

route.get("/", async (req: Request, res: Response): Promise<void> => {
    try {
        const products = await Product.find();
        res.render('products.ejs', { products });
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
            res.status(500).json({ status: false, message: error.message });
        }
    }
});

route.post("/", async (req: Request<{}, {}, CreateProductDTO>, res: Response): Promise<void> => {
    try {
        const { name, price } = req.body;
        const product = await Product.create({ name, price });
        res.json({ status: true, message: 'product added', product });
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
            res.status(500).json({ status: false, message: error.message });
        }
    }
});

export default route;