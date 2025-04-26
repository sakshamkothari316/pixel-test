import { AxiosInstance } from "axios";

const setupAxios = (axios: AxiosInstance) => {
  axios.interceptors.request.use(
    (request) => {
      return request;
    },
    (err) => Promise.reject(err)
  );

  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (err) => Promise.reject(err.response)
  );
};

export default setupAxios;
