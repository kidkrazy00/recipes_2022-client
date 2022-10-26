import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, useRoutes } from "react-router-dom"
import { Auth0Provider } from "@auth0/auth0-react";
import history from "./services/history";

import App from "./App";
import './index.scss';

const onRedirectCallback = (appState) => {
  history.push(
    appState && appState.returnTo ? appState.returnTo : window.location.pathname
  );
};

// Please see https://auth0.github.io/auth0-react/interfaces/Auth0ProviderOptions.html
// for a full list of the available properties on the provider
// const config = getConfig();

const providerConfig = {
  domain: `${process.env.REACT_APP_AUTH0_DOMAIN}`,
  clientId: `${process.env.REACT_APP_AUTH0_CLIENTID}`,
  // ...(config.audience ? { audience: config.audience } : null),
  redirectUri: window.location.origin,
  onRedirectCallback,
};

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider {...providerConfig}>
      <BrowserRouter history={history}>
        <App />
      </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
