import { CreateProductDTO } from "../types/Product";
import { IProductRepository } from "../domain/repositories/ProductRepository";
import { ProductEntity } from "../domain/entities/Product";
import { MongooseProductRepository } from "../infrastructure/repositories/mongoose-product.repository";

export class InventoryService {
  constructor(private readonly productRepository: IProductRepository) {}

  async getAllProducts(): Promise<ProductEntity[]> {
    return this.productRepository.findAll();
  }

  async addProduct(data: CreateProductDTO): Promise<ProductEntity> {
    return this.productRepository.create({ name: data.name, price: data.price });
  }

  async deleteProduct(id: string): Promise<boolean> {
    return this.productRepository.delete(id);
  }
}

// Default instance used by the app; can be replaced in tests
export const inventoryService = new InventoryService(
  new MongooseProductRepository()
);

