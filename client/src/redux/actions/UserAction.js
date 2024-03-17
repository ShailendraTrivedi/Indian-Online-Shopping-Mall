import { toast } from "react-toastify";
import api from "../../InterceptorAPI";
import {
  failureAddDetails,
  requestAddDetails,
  successAddDetails,
} from "../reducers/UserReducer";

export const UserDetailsAction = () => {
  return async (dispatch) => {
    dispatch(requestAddDetails());
    try {
      const response = await api.get("/api/user/details");
      if (response.status === 200) {
        dispatch(successAddDetails(response.data.user));
      }
    } catch (error) {
      console.log(error);
      dispatch(failureAddDetails());
      toast.error(error.response.data.error);
    }
  };
};

export const UserDetailsChangeAction = (values) => {
return async (dispatch)=>{
  try {
    const response = await api.get("")
  } catch (error) {
    
  }
}
}
