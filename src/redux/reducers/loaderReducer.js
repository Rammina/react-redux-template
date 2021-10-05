// Reducer related to async loader show and hide
// Non-package imports
// reducer that manages whether a loader should be shown or not
import { ActionTypes } from "../actions";

const initialState = {};

const loaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ACTION_SHOW_LOADER:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default loaderReducer;
