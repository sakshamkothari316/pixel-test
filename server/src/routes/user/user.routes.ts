// ----------------Imports----------------
import { Router } from "express";
import { getUsers } from "../../controllers/user/user.controller";

// ----------------------------------------
const userRouter = Router();

// ----------------------------------------
// google-login
userRouter.route("/").get(getUsers);

// ----------------------------------------
export { userRouter };
