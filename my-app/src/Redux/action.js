import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} from "./actionType";
import axios from "axios";

const RegisterReq = () => {
  return {
    type: REGISTER_REQUEST,
  };
};

const RegisterSuc = (token) => {
  return {
    type: REGISTER_SUCCESS,
    token,
  };
};

const RegisterFail = (err) => {
  return {
    type: REGISTER_FAILURE,
    err,
  };
};

const register = (token) => (dispatch) => {
  dispatch(RegisterReq());
  return axios({
    method: "POST",
    url: "",
    baseURL: "https://mock-api-xfgb.onrender.com/users",
    data: token,
  })
    .then((res) => dispatch(RegisterSuc(res.data)))
    .catch((err) => dispatch(RegisterFail()));
};

export { register };
