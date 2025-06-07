// routers/bus.routes.js
import express from "express";
import { validateBody, validateParams } from "../middlewares/validate.js";
import {
  busCreateValidation,
  busUpdateValidation,
  idParamValidation,
} from "../validations/bus.validation.js";
import {
  createBus,
  getAllBuses,
  getBusById,
  updateBus,
  deleteBus,
} from "../controllers/bus.controller.js";

const router = express.Router();

router.get("/", getAllBuses);
router.get("/:id", validateParams(idParamValidation), getBusById);
router.post("/", validateBody(busCreateValidation), createBus);
router.put(
  "/:id",
  validateParams(idParamValidation),
  validateBody(busUpdateValidation),
  updateBus
);
router.delete("/:id", validateParams(idParamValidation), deleteBus);

export default router;
