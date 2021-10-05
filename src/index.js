// from packages
import * as React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Amplify from "aws-amplify";
// non-packages
import store from "configureStore";
import App from "App";
import config from "utils/config";
import "styles/index.scss";
import "normalize.css";
import "react-toastify/dist/ReactToastify.css";

// AWS amplify setup
Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    authenticationFlowType: "USER_PASSWORD_AUTH",
    region: config.cognito.REGION,
    userPoolId: config.cognito.USER_POOL_ID,
    identityPoolId: config.cognito.IDENTITY_POOL_ID,
    userPoolWebClientId: config.cognito.APP_CLIENT_ID,
  },
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
