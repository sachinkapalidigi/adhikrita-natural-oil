// External dependencies
import http from "http"; // change to https to deploy
import dotenv from "dotenv";
dotenv.config();

// Project modules
import app from "./app";
import sequelize from "./services/mysql";

const PORT = process.env.PORT || 8001;

// Add path to certs for https
const server = http.createServer(app);

async function startServer() {
  await sequelize.authenticate();

  server.listen(PORT, () => {
    console.log(`Server started on PORT ${PORT}`);

    // Untested
    process.on("message", (message) => {
      if (message == "shutdown") {
        console.log("Shutting down server and closing all connections");
        sequelize.close();
        server.close();
      }
    });
  });
}

startServer();
