import ProductModel from "../../models/product.model";
import { IProductRepository } from "../../domain/repositories/ProductRepository";//abstract class
import { ProductEntity } from "../../domain/entities/Product";

export class MongooseProductRepository implements IProductRepository {
  async findAll(): Promise<ProductEntity[]> {
    const docs = await ProductModel.find().exec();
    return docs.map(
      (doc) => new ProductEntity(doc.id ?? null, doc.name, doc.price)
    );
  }

  async create(data: { name: string; price: number }): Promise<ProductEntity> {
    const doc = await ProductModel.create(data);
    return new ProductEntity(doc.id ?? null, doc.name, doc.price);
  }

  async delete(id: string): Promise<boolean> {
    const result = await ProductModel.findByIdAndDelete(id).exec();
    console.log(result)
    return result !== null;
  }
}


