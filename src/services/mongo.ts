import mongoose from "mongoose";

const MONGO_URL = process.env.MONGO_URL || "";

const mongooseConnection = mongoose.connection;

mongooseConnection.on("open", () => {
  console.log("MongoDB connection ready!");
});

mongooseConnection.on("error", (err) => {
  console.error(err);
});

async function mongoConnect() {
  await mongoose.connect(MONGO_URL);
}

async function mongoDisconnect() {
  await mongoose.disconnect();
}

export { mongoConnect, mongoDisconnect, mongooseConnection };
