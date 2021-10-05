// Reducer related to authentication status
// non- package imports
import { ActionTypes } from "../actions";

const INITIAL_STATE = {
  isSignedIn: false,
  user: null,
  // the app will try to load the user at first anyway, so may as well set it to true
  isLoading: true,
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.RETRIEVE_USER_INFO_SUCCESS:
      return {
        isSignedIn: true,
        user: action.payload,
        isLoading: true,
      };
    case ActionTypes.REGISTER_SUCCESS:
    case ActionTypes.RETRIEVE_USER_INFO_FAIL:
    case ActionTypes.REGISTER_FAIL:
    case ActionTypes.LOGOUT:
      return {
        isSignedIn: false,
        user: null,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default authReducer;
