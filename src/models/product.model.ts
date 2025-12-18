import { Schema, model } from "mongoose"
import { Product } from "../types/Product";

const ProductSchema = new Schema<Product>({
  name: String,
  price: Number,
});

const Product = model<Product>("Product",ProductSchema)
export default Product