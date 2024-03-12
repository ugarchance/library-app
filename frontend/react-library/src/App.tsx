import React from "react";

import "./App.css";
import { Navbar } from "./layouts/NavBarAndFooter/Navbar";

import { HomePage } from "./layouts/HomePage/HomePage";
import { Footer } from "./layouts/NavBarAndFooter/Footer";
import { SearchBooksPage } from "./layouts/SearchBooksPage/SearchBooksPage";
import { Redirect, Route, Switch } from "react-router-dom";
import { BookChechoutPage } from "./layouts/BookCheckoutPage/BookCheckoutPage";
export const App = () => {
  return (
    <div
      className="d-flex flex-column min-vh-100" /*Bu kısmı eğer sayfada birşey yoksa footer kısmı yukarı çıkmasın diye ekledim*/
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
        </Switch>
      </div>
      <Footer />
    </div>
  );
};
