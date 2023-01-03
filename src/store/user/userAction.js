import { createAction } from "../../utils/helpers/reducer";
import { USER_REDUCER_TYPES } from "./userTypes";

export const setCurrentUser = (user) => {
  return createAction(USER_REDUCER_TYPES.SET_CURRENT_USER, user);
};
