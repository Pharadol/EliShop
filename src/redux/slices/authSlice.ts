import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setCookie, deleteCookie } from "cookies-next";
import { Login, Register, AuthState } from "@/model/Auth";

const BASE_API_URL = `${process.env.API_URL}/api/auth`;

const setAuthCookie = (token: string, name: string) => {
  const toBase64 = Buffer.from(token).toString("base64");

  setCookie(name, toBase64, {
    maxAge: 30 * 24 * 60 * 60,
    path: "/",
  });
};

const initialState: AuthState = {
  currentUser: null,
  isLoading: false,
  loginError: null,
  registerError: null,
};

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userData: Register, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${BASE_API_URL}/local/register`,
        userData
      );
      return response.data;
    } catch (error: any) {
      const errorMessage = error?.response?.data?.error
        ? error?.response?.data?.error?.message
        : "login failed";
      return rejectWithValue(errorMessage);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (userData: Login, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${BASE_API_URL}/local`, userData);
      return response.data;
    } catch (error: any) {
      const errorMessage = error?.response?.data?.error
        ? error?.response?.data?.error?.message
        : "login failed";
      return rejectWithValue(errorMessage);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logoutUser(state) {
      state.currentUser = null;
      localStorage.removeItem("currentUser");
      deleteCookie("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.registerError = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentUser = action.payload.user;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.registerError = action.payload as string;
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.registerError = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentUser = action.payload.user;
        setAuthCookie(action.payload.jwt, "token");
        const currentUser = {
          username: state.currentUser?.username,
          email: state.currentUser?.email,
        };
        localStorage.setItem("currentUser", JSON.stringify(currentUser));
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.loginError = action.payload as string;
      });
  },
});

export const { logoutUser } = authSlice.actions;

export default authSlice.reducer;
