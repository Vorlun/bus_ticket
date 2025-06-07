import express from "express";
import { validateBody, validateParams } from "../middlewares/validate.js";
import {
  driverCreateValidation,
  driverUpdateValidation,
  idParamValidation,
} from "../validations/driver.validation.js";
import {
  createDriver,
  getAllDrivers,
  getDriverById,
  updateDriver,
  deleteDriver,
} from "../controllers/driver.controller.js";

const router = express.Router();

router.get("/", getAllDrivers);

router.get("/:id", validateParams(idParamValidation), getDriverById);

router.post("/", validateBody(driverCreateValidation), createDriver);

router.put(
  "/:id",
  validateParams(idParamValidation),
  validateBody(driverUpdateValidation),
  updateDriver
);

router.delete("/:id", validateParams(idParamValidation), deleteDriver);

export default router;
