import { createSlice } from "@reduxjs/toolkit";
import { getUserDetail } from "./authAction";

// Define a type for the slice state
export interface IUser {
  name: string;
  city: string;
  state: string;
  country: string;
  postCode: string;
  number: string;
  latitude: string;
  longitude: string;
  profileImg: string;
}

interface IAuthState {
  loading: boolean;
  user: Array<IUser>;
}

// Define the initial state using that type
const initialState: IAuthState = {
  loading: false,
  user: [],
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // get user detail
    builder
      .addCase(getUserDetail.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUserDetail.fulfilled, (state, action) => {
        state.user = action.payload.data;
        state.loading = false;
      })
      .addCase(getUserDetail.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const authReducer = authSlice.reducer;
