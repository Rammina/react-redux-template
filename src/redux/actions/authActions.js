// package imports
import axios from "axios";
// non- package imports
import serverRest from "api/serverRest";
import history from "browserHistory";
import { clearErrors } from "./errorActions";
import { actionShowLoader } from "./loaderActions";
import { errorHandler, renderNotification } from "helpers";

// List of action types to be used
import { ActionTypes } from "./types";

// After logging in or retrieving current user, retrieve additional information from the database
export const retrieveUserInfo = (username) => (dispatch) => {
  serverRest
    .get(`/users/${username}`)
    .then((res) => {
      dispatch({
        type: ActionTypes.RETRIEVE_USER_INFO_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      errorHandler(dispatch, err, {
        type: ActionTypes.RETRIEVE_USER_INFO_FAIL,
      });
    });
};

// Register User (returned username from cognito)
export const registerUser = (username) => (dispatch) => {
  serverRest
    .post("/users/register", { username })
    .then((res) => {
      dispatch({ type: ActionTypes.REGISTER_SUCCESS });
      dispatch(clearErrors());
      // redirect to validation page
      history.push("/validate-email");
    })
    .catch((err) => {
      // this needs an error handler action creator and reducer
      errorHandler(dispatch, err, { type: ActionTypes.REGISTER_FAIL });
    })
    .finally(() => {
      dispatch(actionShowLoader("registerForm", false));
    });
};

// Logout User
export const logoutUser = () => (dispatch) => {
  dispatch({
    type: ActionTypes.LOGOUT,
  });
  dispatch(clearErrors());
  history.push("/login");
  renderNotification({
    message: "Successfully logged out.",
    type: "info",
    position: "top-center",
  });
};
