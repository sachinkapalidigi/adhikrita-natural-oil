import express from "express";
import cors from "cors";
import morgan from "morgan";

import apiV1 from "./routes/api.v1";

const app = express();

// TODO: Add only specific site to cors
app.use(cors());

app.use(morgan("combined"));

app.use(express.json());

app.use("/v1", apiV1);

export default app;
