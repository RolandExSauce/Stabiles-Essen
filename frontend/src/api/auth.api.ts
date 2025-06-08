import { AUTH_ENDPOINTS } from "./constants";
import { axiosInstance } from "../lib/axios";
import { ILogin, IRegister } from "../types/auth.types";

//make axios calls to API    endpoints 
const loginUser = async (credentials: ILogin) => {
    const res = await axiosInstance.post(AUTH_ENDPOINTS.SIGN_IN, credentials);
    return res.data;
};

const registerUser = async (userInfo: IRegister) => {
    const res = await axiosInstance.post(AUTH_ENDPOINTS.SIGN_UP, userInfo);
    return res.data;
};

export { loginUser, registerUser }