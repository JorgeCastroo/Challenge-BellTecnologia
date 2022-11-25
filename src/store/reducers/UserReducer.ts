import { Reducer } from "redux";
import { UserState, UserType } from "./types";

const INITIAL_STATE: UserState = {
  userMode: {},
};

const userReducer: Reducer<UserState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserType.UPDATE_USER:
      return { ...state, userMode: action.payload };
    default:
      return state;
  }
};
export default userReducer;
