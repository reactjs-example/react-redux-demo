import { BUY_LAPTOP } from "./laptopActionTypes";

const INITIAL_LAPTOP_STATE = {
  count: 10,
};

const LAPTOP_REDUCER = (prevState = INITIAL_LAPTOP_STATE, action) => {
  switch (action.type) {
    case BUY_LAPTOP:
      return {
        ...prevState,
        count: prevState.count - 1,
      };
    default:
      return prevState;
  }
};

export default LAPTOP_REDUCER;
