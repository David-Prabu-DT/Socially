import axios from "axios";

const API = axios.create({ baseURL: process.env.BASE_URL });

API.interceptors.request.use((req) => {
   if (localStorage.getItem("profile")) {
      req.headers!.Authorization = `Bearer ${JSON.parse(localStorage.getItem("profile") || "{}").token
         }`;
   }
   return req;
});

API.interceptors.response.use(
   (response: any) => {

      if (response.data.token) {
         return response;
      } else {

      }




   },
   // async (err: any) => {
   //    TokenService.getRefreshToken();

   //    const originalConfig = err.config;
   //    // console.log(err.response.data.message);

   //    if (err.response.status === 401) {
   //       TokenService.getRefreshToken();
   //       if (
   //          err.response.data.message === "Unauthorized! Access Token was expired!"
   //       ) {
   //          TokenService.getRefreshToken();

   //          try {
   //             let refreshToken = TokenService.getRefreshToken();

   //             const res = await Instance.post("/refresh", {
   //                "x-access-token": refreshToken,
   //                "Content-Type": "application/json",
   //             });

   //             console.log(res);

   //             TokenService.UpdateAccessToken(res?.data?.data?.token);
   //             Instance.defaults.headers.common["x-access-token"] =
   //                res?.data?.data?.token;
   //             return Instance(originalConfig);
   //          } catch (_error) {
   //             return Promise.reject(_error);
   //          }
   //       }
   //    }
   // }
);

export default API;
