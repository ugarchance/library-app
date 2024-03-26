import React, { Component } from "react";

import "./App.css";
import { Navbar } from "./layouts/NavBarAndFooter/Navbar";

import { HomePage } from "./layouts/HomePage/HomePage";
import { Footer } from "./layouts/NavBarAndFooter/Footer";
import { SearchBooksPage } from "./layouts/SearchBooksPage/SearchBooksPage";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import { BookChechoutPage } from "./layouts/BookCheckoutPage/BookCheckoutPage";
import { oktaConfig } from "./lib/oktaConfig";
import { OktaAuth, toRelativeUrl } from "@okta/okta-auth-js";
import { LoginCallback, Security } from "@okta/okta-react";
import LoginWidget from "./auth/LoginWidget";

const oktaAuth = new OktaAuth(oktaConfig);

export const App = () => {
  const customAuthHandler = () => {
    history.push("/login");
  };

  const history = useHistory();

  const restoreOriginalUri = async (_oktaAuth: any, originalUri: any) => {
    history.replace(toRelativeUrl(originalUri || "/", window.location.origin));
  };
  return (
    <div
      className="d-flex flex-column min-vh-100" /*Bu kısmı eğer sayfada birşey yoksa footer kısmı yukarı çıkmasın diye ekledim*/
    >
      <Security
        oktaAuth={oktaAuth}
        restoreOriginalUri={restoreOriginalUri}
        onAuthRequired={customAuthHandler}
      >
        <Navbar />
        <div
          className="flex-grow-1" /*Bu kısmı eğer sayfada birşey yoksa footer kısmı yukarı çıkmasın diye ekledim*/
        >
          <Switch>
            <Route path={"/"} exact>
              <Redirect to={"/home"} />
            </Route>
            <Route path="/home">
              <HomePage />
            </Route>
            <Route path={"/search"}>
              <SearchBooksPage />
            </Route>
            <Route path={"/checkout/:bookId"}>
              <BookChechoutPage />
            </Route>
            <Route
              path={"/login"}
              render={() => <LoginWidget config={oktaConfig} />}
            />
            <Route path={"/login/callback"} component={LoginCallback} />
          </Switch>
        </div>
        <Footer />
      </Security>
    </div>
  );
};
