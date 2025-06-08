import { AUTH_ENDPOINTS } from "./constants";
import { axiosInstance } from "../lib/axios";
import { ILogin, IRegister } from "../types/auth.types";
import { IAuthResponse } from "../types/components.types";

//make axios calls to API    endpoints 
const loginUser = async (credentials: ILogin): Promise<IAuthResponse> => {
    const res = await axiosInstance.post(AUTH_ENDPOINTS.SIGN_IN, credentials);
    return res.data;
};

const registerUser = async (userInfo: IRegister): Promise<IAuthResponse> => {
    const res = await axiosInstance.post(AUTH_ENDPOINTS.SIGN_UP, userInfo);
    return res.data;
};

export { loginUser, registerUser }