import express, { Router } from "express";
import { createInventoryController } from "../controllers/inventory.controller";
import { inventoryService } from "../services/inventory.service";

const router: Router = express.Router();

const { loadInventory, addProduct, deleteProduct } =
  createInventoryController(inventoryService);

router.get("/", loadInventory);
router.post("/", addProduct);
router.delete("/", deleteProduct);

export default router;
