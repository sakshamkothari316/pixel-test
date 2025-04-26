// ----------------------------Imports-------------------------------
import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";
import { corsConfig } from "./utils";
import { CustomError } from "./utils/error";
import { userRouter } from "./routes/user/user.routes";
// -------------------------------------------------------------------

// Routes Imports

// ------------------------------------------------------------------
export const app: express.Application = express();

// --------------------------CORS HANDLING---------------------------
app.use(cors(corsConfig)); // handling the cross origin resource sharing
// ------------------------------------------------------------------

// ---------------------------MIDDLEWARES----------------------------
app.use(morgan("dev")); // logs the incoming request
app.use(express.json()); // parses the incoming json data
// ------------------------------------------------------------------

// ------------------------------ROUTES------------------------------
const versionOne = (route: string) => {
  return `/api/v1/${route}`;
};

// handling the requests with no parameters or invalid parameters
app.all(["/", "/api", "/api/v1"], (req: Request, res: Response) => {
  res.status(200).json({ message: "Welcome to Pixel" });
  return;
});

app.use(versionOne("user"), userRouter); // userRouter

// -------------------------------------------------------------------

// --------------------------ERROR HANDLING---------------------------
app.all("*", (req, res, next) => {
  next(new CustomError(`No such ${req.originalUrl} url exists`, 404));
});

app.use(
  (error: CustomError, req: Request, res: Response, next: NextFunction) => {
    console.log(error.message, error.stack);
    error.statusCode = error.statusCode ?? 500;
    res.status(error.statusCode).json({
      statusCode: error.statusCode,
      status: error.status,
      success: false,
      message: error.message,
    });
    return;
  }
);
// -------------------------------------------------------------------
