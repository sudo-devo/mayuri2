import {
  GET_DATA_FAILURE,
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
} from "./actionType";

import axios from "axios";

const Getdatarequest = () => {
  return {
    type: GET_DATA_REQUEST,
  };
};

const Getdatasuccess = (payload) => {
  return {
    type: GET_DATA_SUCCESS,
    payload,
  };
};

const Getdatafailure = () => {
  return {
    type: GET_DATA_FAILURE,
  };
};

const getdata = (params) => (dispatch) => {
  const querry = JSON.parse(localStorage.getItem("querry"));
  console.log(querry[0].category);
  console.log(querry[0].difficulty);
  // &category=${query[0].category}
  dispatch(Getdatarequest());
  return axios
    .get(
      `https://opentdb.com/api.php?amount=${querry[0].number}&category=${querry[0].category}&difficulty=${querry[0].difficulty}&type=multiple`
    )
    .then((res) =>
      dispatch(
        Getdatasuccess(res.data.results),
        console.log("data", res.data.results)
      )
    )

    .catch((err) => dispatch(Getdatafailure(err)));
};
export { getdata };
