import express from "express";

import requestValidator from "../../middlewares/requestValidator";
import { httpLoginHandler, httpRegisterHandler } from "./auth.controller";
import { AuthControllerSchema } from "./auth.vadation.schema";

const authRouter = express.Router();

authRouter.post(
  "/login",
  requestValidator(AuthControllerSchema.loginSchema),
  httpLoginHandler
);

// authRouter.post("/logout", (req, res) => {}); // Remove token and redirect to login page

authRouter.post(
  "/register",
  requestValidator(AuthControllerSchema.registerSchema),
  httpRegisterHandler
); // Not needed for this app

export default authRouter;
