import axios from 'axios';

const apiPosts = axios.create({
   // baseURL: "http://newsapi.org/v2/top-headlines?country=us&apiKey=682ad46f405c49cd9781e378461f213a"
   baseURL: "https://simple-blog-api.crew.red"

});

apiPosts.interceptors.response.use((res) => res.data);

export default apiPosts;
