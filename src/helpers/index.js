// Helper functions to be used in other files
// Package imports
import { Auth } from "aws-amplify";
import { toast } from "react-toastify";
// Non-package imports
import {
  retrieveUserInfo,
  returnErrors,
  retrieveWikiSearchValues,
} from "redux/actions";
import { format } from "date-fns";

const anyToast = toast;

// AWS amplify/cognito
// used for retrieving current authenticated user from AWS amplify after first render of the application
export const appAuthSetupOnLoadHandler = async (dispatch) => {
  try {
    // retrieve authenticated user object
    const { username } = await Auth.currentAuthenticatedUser();
    console.log(username);
    dispatch(retrieveUserInfo(username));
  } catch (err) {
    console.error(err);
    dispatch({ type: ActionTypes.RETRIEVE_USER_INFO_FAIL });
  }
};

// action creator helpers

export const errorHandler = (dispatch, err, errorType) => {
  // handle failure by logging it on the console and the redux store
  console.error(err);
  console.error(err.response);
  if (err.response)
    dispatch(returnErrors(err.response.data, err.response.status));
  dispatch(errorType);
};

// string functions
export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

// React toastify
export const renderNotification = ({
  message,
  type,
  position,
  onOpenCb,
  onCloseCb,
}) => {
  anyToast[type](message, {
    position: position || "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    onOpen: () => {
      if (onOpenCb) onOpenCb();
    },
    onClose: () => {
      if (onCloseCb) onCloseCb();
    },
  });
};

// Date time helpers
export const convertToMDY = (date) => {
  return date ? format(new Date(date), "MM/dd/yyyy") : null;
};

// regular expression

// simple email validator (not a substitute for actual email validation from the backend)
export const validateEmail = (email) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};
