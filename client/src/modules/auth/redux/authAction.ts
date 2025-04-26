import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { SERVER_CONFIG } from "../../../config/site.config";

// get user details
export const getUserDetail = createAsyncThunk(
  "auth/getUserDetail",
  async (query: string | void, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await axios({
        method: "GET",
        url: `${SERVER_CONFIG.development}/user${query ? `?${query}` : ""}`,
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status === 200) {
        return fulfillWithValue(response.data);
      } else {
        return rejectWithValue(response.data.message);
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
