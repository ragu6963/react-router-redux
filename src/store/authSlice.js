import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../api";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

const signup = createAsyncThunk(
  "auth/signup",
  async (data, { rejectWithValue }) => {
    try {
      const config = {
        url: `/auth/v1/signup`, // 슈파베이스 인증 서비스 활용 주소(URL)
        method: "POST",
        data: {
          email: data["email"],
          password: data["password"],
        },
      };
      const response = await axiosInstance(config);
      return response["data"];
    } catch (error) {
      return rejectWithValue(error["response"]["data"]);
    }
  }
);

const login = createAsyncThunk(
  "auth/login",
  async (data, { rejectWithValue }) => {
    try {
      const config = {
        url: `/auth/v1/token?grant_type=password`, // 슈파베이스 인증 서비스 활용 주소(URL)
        method: "POST",
        data: {
          email: data["email"],
          password: data["password"],
        },
      };
      const response = await axiosInstance(config);
      return response["data"];
    } catch (error) {
      return rejectWithValue(error["response"]["data"]);
    }
  }
);

const logout = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      const config = {
        url: `/auth/v1/logout`,
        method: "POST",
      };
      const response = await axiosInstance(config);
      return response["data"];
    } catch (error) {
      return rejectWithValue(error["response"]["data"]);
    }
  }
);

const initialState = {
  token: null,
  error: null,
  isSignedUp: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // 개별 비동기 처리의 'fulfilled' 상태를 개별적으로 처리
      // 로그인 성공 시 토큰 저장
      .addCase(login.fulfilled, (state, action) => {
        console.log(action.payload);
        state.token = action.payload["access_token"];
      })
      // 로그아웃 성공 시 토큰 제거
      .addCase(logout.fulfilled, (state) => {
        state.token = null;
      })
      .addCase(signup.fulfilled, (state) => {
        state.isSignedUp = true;
      })
      // 모든 Thunk의 'pending' 상태를 한 번에 처리
      .addMatcher(
        (action) => action.type.endsWith("/pending"),
        (state) => {
          state.error = null;
        }
      )
      // 모든 Thunk의 'rejected' 상태를 한 번에 처리
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        (state, action) => {
          state.token = null;
          state.error = action.payload;
        }
      );
  },
});

export { signup, login, logout };
export default authSlice.reducer;
