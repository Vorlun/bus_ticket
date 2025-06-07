import express from "express";
import { validateBody, validateParams } from "../middlewares/validate.js";
import {
  provinceCreateValidation,
  provinceUpdateValidation,
  idParamValidation,
} from "../validations/province.validation.js";
import {
  createProvince,
  getAllProvinces,
  getProvinceById,
  updateProvince,
  deleteProvince,
} from "../controllers/province.controller.js";

const router = express.Router();

router.get("/", getAllProvinces);
router.get("/:id", validateParams(idParamValidation), getProvinceById);
router.post("/", validateBody(provinceCreateValidation), createProvince);
router.put(
  "/:id",
  validateParams(idParamValidation),
  validateBody(provinceUpdateValidation),
  updateProvince
);
router.delete("/:id", validateParams(idParamValidation), deleteProvince);

export default router;
