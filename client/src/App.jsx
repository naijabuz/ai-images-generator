import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Header, Main } from "./components";

import { logo } from "./assets";
import styles from "./styles";
import { Home, CreatePost } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Main />
    </BrowserRouter>
  );
};

export default App;
