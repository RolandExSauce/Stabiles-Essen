import { useState } from "react";
import { useNavHook } from "./utility.hooks";
import { IAuthResponse } from "../types/components.types";


//hook for handling form submission of login/register and make the login/register requests 
//and then navigate to home/dashboard
export const useAuthForm = <T>() => {
  const { toHome } = useNavHook();
  const [err, setErr] = useState("");

  const handleSubmit = (mutateFn: (creds: T) => Promise<any>, fieldKeys: (keyof T)[]):
    (e: React.FormEvent<HTMLFormElement>) => Promise<void> =>

    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const form = e.currentTarget;
      const formData = new FormData(form);

      const credentials = {} as Partial<T>; //cuz login has only two fields in contrast to register
      for (const key of fieldKeys) {
        credentials[key] = String(formData.get(String(key))) as T[keyof T];
      };

      try {
        const data = await mutateFn(credentials as T) as IAuthResponse; // cast back to full T and then to Auth Response type 
        localStorage.setItem("token", data.token);
        toHome();
      } catch (err: any) {
        if (err.code === "ERR_NETWORK") {
          setErr("Network Error occurred, failed to fetch");
        } else if (err.status === 401) {
          setErr("Invalid Credentials");
        } else {
          setErr("An unknown error occurred");
        }
      }

    };
  return { err, handleSubmit };
};
