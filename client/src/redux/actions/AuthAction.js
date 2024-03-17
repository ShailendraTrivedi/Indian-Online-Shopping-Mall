import { toast } from "react-toastify";
import api from "../../InterceptorAPI";

export const LoginAction = (values, navigate) => {
  return async (dispatch) => {
    try {
      const response = await api.post("/api/auth/login", values);

      if (response.status === 200) {
        toast.success(response.data.message);
        navigate("/");
      }
    } catch (error) {
      toast.error(error.response.data.error);
    }
  };
};

export const RegisterAction = (values, navigate) => {
  return async (dispatch) => {
    try {
      const response = await api.post("/api/auth/register", values);
      if (response.status === 201) {
        toast.success(response.data.message);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.error);
    }
  };
};
