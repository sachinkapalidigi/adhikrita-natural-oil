import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";

import apiV1 from "./routes/api.v1";

const app = express();

// TODO: Add only specific site to cors
app.use(cors());

app.use(morgan("combined"));

app.use(express.json());
app.use(function (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  //Catch json error
  if (error instanceof SyntaxError) {
    return res.status(400).json({
      message: "Invalid JSON",
    });
  }
  next();
});

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/v1", apiV1);

export default app;
