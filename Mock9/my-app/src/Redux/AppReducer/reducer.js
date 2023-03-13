import {
  GET_DATA_SUCCESS,
  GET_DATA_FAILURE,
  GET_DATA_REQUEST,
} from "./actionType";

const initialState = {
  tasks: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case GET_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        tasks: payload,
      };

    case GET_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};

export { reducer };
