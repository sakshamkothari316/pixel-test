import axios from "axios";
import { userModel } from "../models/user/user.model";
import { TUser } from "../types";

// nodeEnv - node environment
export const nodeEnv = process.env.NODE_ENV === "development" ? "dev" : "prod";
// allowedOrigin - whitelisted origins
const allowedOrigin: string =
  nodeEnv === "dev"
    ? process.env.REACT_APP_DEV_ALLOWED_ORIGIN
      ? process.env.REACT_APP_DEV_ALLOWED_ORIGIN
      : ""
    : process.env.REACT_APP_DEV_ALLOWED_ORIGIN
    ? process.env.REACT_APP_DEV_ALLOWED_ORIGIN
    : "";

// CORS CONFIG
export const corsConfig =
  nodeEnv === "dev"
    ? {
        origin: [allowedOrigin],
        credentials: true,
        allowedHeaders: ["Content-Type", "Authorization", "x-csrf-token"],
        methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
      }
    : {
        origin: [allowedOrigin],
        credentials: true,
        allowedHeaders: ["Content-Type", "Authorization", "x-csrf-token"],
        methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
      };

export const seedDatabase = async () => {
  try {
    const count = await userModel.countDocuments();
    if (count === 0) {
      const response = await axios.get<TUser>(process.env.SEED_URL || "");
      if (
        response.data &&
        response.data.results &&
        Array.isArray(response.data.results)
      ) {
        // data as per the schema
        const formattedUsers = response.data.results.map((user) => ({
          name: `${user.name.first} ${user.name.last}`,
          city: user.location.city,
          state: user.location.state,
          country: user.location.country,
          postCode: user.location.postcode,
          number: user.phone,
          latitude: Number(user.location.coordinates.latitude),
          longitude: Number(user.location.coordinates.longitude),
          profileImg: user.picture.medium,
        }));

        await userModel.insertMany(formattedUsers);
        console.log("Database seeded successfully");
      } else {
        console.error("Seed data is not in expected format");
      }
    }
  } catch (error) {
    console.error(
      "Error seeding database:",
      error instanceof Error ? error.message : ""
    );
  }
};
