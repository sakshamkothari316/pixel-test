import { combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "../modules/auth/redux/authSlice";

export const rootReducer = combineReducers({
  auth: authReducer,
});
export type TRootReducer = ReturnType<typeof rootReducer>;
