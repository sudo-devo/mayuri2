import * as types from "./actionType";

const initial = {
  isAuth: false,
  token: "",
  isLoading: false,
  isError: false,
};

const reducer = (state = initial, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.REGISTER_REQUEST:
      return { ...state, isLoading: true };

    case types.REGISTER_SUCCESS:
      return { ...state, isLoading: false, data: payload, token: "" };
    case types.REGISTER_FAILURE:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};

export { reducer };
