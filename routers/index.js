import { Router } from "express";
import userRouter from "./users.routes.js"
import authRouter from "./auth.routes.js"
import rolesRouter from "./roles.routes.js"
import busRouter from "./bus.routes.js";
import driverRouter from "./driver.routes.js";


const router = Router()

router.use("/user", userRouter);
router.use("/auth", authRouter)
router.use("/roles", rolesRouter);
router.use("/bus", busRouter);
router.use("/driver", driverRouter);


export default router