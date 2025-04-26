// ---------------Imports------------------
import dotenv from "dotenv";
dotenv.config({
  path: ".env.development",
});
import { app as server } from "./app";
import { connectMongoDB } from "./configs/mongoose.config";
import mongoose from "mongoose";
import { seedDatabase } from "./utils";

// ----------------------------------------
//dotenv configuration
const PORT = process.env.PORT || 6959;

// ----------------------------------------
//mongodb connection handling
connectMongoDB();

mongoose.connection.once("connected", async () => {
  // seeding the data
  await seedDatabase();
});

mongoose.connection.on("disconnected", () => {
  console.log("Mongoose Connection Disconnected");
});

// ----------------------------------------

// ----------------------------------------
//express app listening to the incoming requests
server.listen(PORT, () => {
  console.log("Server Started at PORT " + PORT);
});
// --------------Global Error Handling----------------------
process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection!", "reason:", reason);
  process.exit(1);
});
process.on("uncaughtException", (err) => {
  console.log("Uncaught Exception!", err);
  process.exit(1);
});
