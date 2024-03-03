import axios from "axios";
import { REACT_APP_API_URL } from "../../constant";

export const LoginAction = (values, navigate) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `${REACT_APP_API_URL}/api/user/login`,
        values
      );
      console.log(
        `🚀 ~ file: UserAction.js:8 ~ return ~ response:\n =>`,
        response
      );
      // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9";
      // Cookies.set("token", token);
      // navigate("/");
    } catch (error) {
      return;
    }
  };
};

export const RegisterAction = (values, navigate) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `${REACT_APP_API_URL}/api/user/register`,
        values
      );
      console.log(
        `🚀 ~ file: UserAction.js:8 ~ return ~ response:\n =>`,
        response
      );
      // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9";
      // Cookies.set("token", token);
      // navigate("/");
    } catch (error) {
      return;
    }
  };
};
