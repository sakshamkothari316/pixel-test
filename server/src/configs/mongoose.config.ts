// ------------------Imports------------------
import mongoose from "mongoose";
// -------------------------------------------
const successfulMsg = "Connected to MongoDB Successfully";
const failedMsg = "Connected to Mongo Database Failed";

// -------------------------------------------
export const connectMongoDB = async () => {
  try {
    if (process.env.MONGO_DB_URL) {
      await mongoose.connect(process.env.MONGO_DB_URL);
      console.log(successfulMsg);
    } else {
      throw new Error(failedMsg);
    }
  } catch (error) {
    if (error instanceof Error) {
      console.log(`${failedMsg} : ${error.message}`);
    } else {
      console.log(`${failedMsg} : ${error}`);
    }
  }
};
