import express from "express";
import {
  getAllRoles,
  createRole,
  assignRolesToUser,
  getUserRoles,
} from "../controllers/roles.controller.js";

const router = express.Router();

router.get("/", getAllRoles);
router.post("/", createRole);
router.post("/assign", assignRolesToUser); 
router.get("/user/:id", getUserRoles);

export default router;
