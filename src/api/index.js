import axios from "axios";
import { store } from "../store";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

// axios 인스턴스 생성
const axiosInstance = axios.create({
  baseURL: SUPABASE_URL,
  headers: {
    "Content-Type": "application/json",
    apikey: SUPABASE_ANON_KEY,
  },
});

axiosInstance.interceptors.request.use((config) => {
  // 전역 상태 token 가져오기
  const token = store.getState().auth.token;

  // token이 있으면 요청 헤더에 추가
  if (token) {
    // Authorization 헤더에 Bearer 토큰 추가
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
