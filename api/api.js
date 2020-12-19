// import axios from 'axios';
// import {API} from '../config/config';
//
// const api = axios.create({
//   baseURL: API
// });
//
// api.interceptors.request.use(
//   (reqConfig) => {
//     if (localStorage.getItem('token'))
//       reqConfig.headers.authorization = 'Bearer ' + localStorage.getItem('token');
//
//     return reqConfig;
//   },
//   (err) => Promise.reject(err)
// );
//
// api.interceptors.response.use((res) => res.data);
//
// export default api;
