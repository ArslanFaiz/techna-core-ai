// // api.ts
// import axios from "axios";

// // ----------------------
// // Storage helpers
// // ----------------------
// const getAccessToken = () => localStorage.getItem("accessToken");
// const getRefreshToken = () => localStorage.getItem("refreshToken");
// const setAccessToken = (token: string) => localStorage.setItem("accessToken", token);
// const setRefreshToken = (token: string) => localStorage.setItem("refreshToken", token);
// const clearTokens = () => {
//   localStorage.removeItem("accessToken");
//   localStorage.removeItem("refreshToken");
// };

// // ----------------------
// // Axios instance
// // ----------------------
// const api = axios.create({
//   baseURL: "https://technacore-portfolio-backend-production.up.railway.app/api",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// // ----------------------
// // Request interceptor to attach access token
// // ----------------------
// api.interceptors.request.use(
//   (config) => {
//     const token = getAccessToken();
//     if (token && config.headers) {
//       config.headers["Authorization"] = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// // ----------------------
// // Refresh token logic
// // ----------------------
// const refreshAccessToken = async (): Promise<string | null> => {
//   try {
//     const refreshToken = getRefreshToken();
//     if (!refreshToken) return null;

//     const response = await axios.post(
//       "https://technacore-portfolio-backend-production.up.railway.app/api/auth/refresh-token",
//       { token: refreshToken }
//     );

//     const { accessToken, refreshToken: newRefreshToken } = response.data;

//     if (accessToken) setAccessToken(accessToken);
//     if (newRefreshToken) setRefreshToken(newRefreshToken);

//     return accessToken;
//   } catch (error) {
//     console.error("Refresh token failed:", error);
//     clearTokens();
//     return null;
//   }
// };

// // ----------------------
// // Response interceptor to handle 401
// // ----------------------
// api.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;

//     if (error.response?.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;
//       const newAccessToken = await refreshAccessToken();

//       if (newAccessToken && originalRequest.headers) {
//         originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
//         return api(originalRequest); // Retry original request
//       }
//     }

//     return Promise.reject(error);
//   }
// );

// // ----------------------
// // Example usage functions
// // ----------------------
// export const login = async (email: string, password: string) => {
//   const response = await api.post("/auth/login", { email, password });
//   const { accessToken, refreshToken } = response.data;
//   setAccessToken(accessToken);
//   setRefreshToken(refreshToken);
//   return response.data;
// };

// export const logout = () => clearTokens();

// export default api;

// // ----------------------
// // Create Contact
// // ----------------------


