import { ProductEntity } from "../entities/Product";
import { CreateProductDTO } from "../../types/Product";

export interface IProductRepository {
  findAll(): Promise<ProductEntity[]>;
  create(data: CreateProductDTO): Promise<ProductEntity>;
  delete(id: string): Promise<boolean>;
}