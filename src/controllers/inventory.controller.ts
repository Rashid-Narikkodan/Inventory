import { Response, Request } from "express";
import { handleError } from "../utils/error.handler";
import { CreateProductDTO } from "../types/Product";
import { SuccessResponse } from "../types/Error";
import { InventoryService } from "../services/inventory.service";
import { ProductEntity } from "../domain/entities/Product";

export const createInventoryController = (inventoryService: InventoryService) => {
  const loadInventory = async (req: Request, res: Response) => {
    try {
      const products = await inventoryService.getAllProducts();
      res.render("products.ejs", { products });
    } catch (error) {
      handleError(res, error);
    }
  };

  const addProduct = async (
    req: Request<{}, {}, CreateProductDTO>,
    res: Response
  ) => {
    try {
      const product = await inventoryService.addProduct(req.body);

      const response: SuccessResponse<ProductEntity> = {
        success: true,
        message: "Product added",
        data: product,
      };

      res.status(201).json(response);
    } catch (error) {
      handleError(res, error);
    }
  };
  const deleteProduct = async (
    req: Request<{}, {}, { id: string }>,
    res: Response
  ) => {
    try {
      const { id } = req.body;
      const deleted = await inventoryService.deleteProduct(id);

      if (!deleted) {
        return res.status(404).json({
          success: false,
          message: "Product not found",
        });
      }

      res.status(200).json({
        success: true,
        message: "Product deleted successfully",
        data: { id },
      });
    } catch (error) {
      handleError(res, error);
    }
  };

  return {
    loadInventory,
    addProduct,
    deleteProduct
  };
};
