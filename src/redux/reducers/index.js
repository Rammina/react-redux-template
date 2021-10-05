// Package imports
import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
// Non-package imports
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import loaderReducer from "./loaderReducer";

const rootReducer = combineReducers({
  form: formReducer,
  auth: authReducer,
  error: errorReducer,
  loader: loaderReducer,
});

export default rootReducer;
