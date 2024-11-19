import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

export const admin_login = createAsyncThunk(
  "auth/admin_login",
  async (info) => {
    try {
      console.log("console the data in reducer", info);
      const response = await api.post("/admin-login", info, {
        withCredentials: true,
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
      console.log("error while fetching the data");
    }
  }
);

const authReducer = createSlice({
  name: "auth",
  initialState: {
    successMessage: "",
    errorMessage: "",
    loader: "",
    userInfo: "",
  },
  reducers: {},
  extraReducers: () => {},
});

export default authReducer.reducer;
