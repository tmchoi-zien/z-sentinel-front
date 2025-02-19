import axios, { AxiosInstance } from "axios";
import { getTokens } from "@/utils/authHelper";

export const AuthAxios = (): AxiosInstance => {
  const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL, // 기본 URL 설정
  });

  instance.interceptors.request.use(
    (config) => {
      // const { accessToken, refreshToken } = getTokens(); // getTokens로 accessToken과 refreshToken 가져오기
      const accessToken =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZHgiOjMsIm5hbWUiOiJcdWFlNDBcdWJiZmNcdWFjYmQiLCJyb2xlIjoiTUFOQUdFUiIsImNvbXBhbnkiOiJsZ2NoZW0iLCJ1c2VyX2lkIjoiYWNjZXNzOnppZW4wNyIsImV4cCI6MTczOTk4NTkxNiwic3ViIjoiU0VTU0lPTl9JRCJ9.WjOflLqPFoKR7BeXoa3CQo4pr2o3GUvBYFHo-FMRUD8";
      const refreshToken =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InJlZnJlc2g6emllbjA3IiwiZXhwIjoxNzQwNTA0MzE2fQ.sG8k-BZlFwBIEgRFSgbVq8SP_PMiAgd0jEA5MrcKxbg";

      if (accessToken) {
        config.headers["Ac-token"] = `${accessToken}`;
        // config.headers.Authorization = `Bearer ${accessToken}`;
      }

      if (refreshToken) {
        config.headers["Re-token"] = refreshToken;
        // config.headers["X-Refresh-Token"] = refreshToken;
      }

      return config;
    },
    (error) => Promise.reject(error),
  );

  return instance;
};
