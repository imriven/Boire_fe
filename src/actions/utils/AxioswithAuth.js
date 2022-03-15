import axios from "axios";


const AxiosWithAuth = () => {
  const token = localStorage.getItem("token");
  const instance = axios.create({
    headers: {
      Authorization: token
    }
  })
  instance.interceptors.request.use(request => {console.log("starting request", request)
return request
})
  return instance;
};

export default AxiosWithAuth;