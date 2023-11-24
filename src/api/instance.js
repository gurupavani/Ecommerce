import axios from "axios";

const axiosInstance=axios.create({
    baseURL : 'https://dummyjson.com',
    headers: {
  //  Authorization: `<Your Auth Token>`,
      "Content-Type": "application/json",
      timeout : 1000,
    }, 
  })

  export default axiosInstance;