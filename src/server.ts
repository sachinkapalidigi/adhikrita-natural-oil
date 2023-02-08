// External dependencies
import http from "http"; // change to https to deploy
import dotenv from "dotenv";
dotenv.config();

// Project modules
import app from "./app";
import { mongoConnect } from "./services/mongo";

const PORT = process.env.PORT || 8001;

// Add path to certs for https
const server = http.createServer(app);

async function startServer() {
  await mongoConnect();

  server.listen(PORT, () => {
    console.log(`Server started on PORT ${PORT}`);
  });
}

startServer();
