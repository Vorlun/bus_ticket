import express from "express";
import { validateBody, validateParams } from "../middlewares/validate.js";
import {
  cityCreateValidation,
  cityUpdateValidation,
  idParamValidation,
} from "../validations/city.validation.js";
import {
  createCity,
  getAllCities,
  getCityById,
  updateCity,
  deleteCity,
} from "../controllers/city.controller.js";

const router = express.Router();

router.get("/", getAllCities);
router.get("/:id", validateParams(idParamValidation), getCityById);
router.post("/", validateBody(cityCreateValidation), createCity);
router.put(
  "/:id",
  validateParams(idParamValidation),
  validateBody(cityUpdateValidation),
  updateCity
);
router.delete("/:id", validateParams(idParamValidation), deleteCity);

export default router;
