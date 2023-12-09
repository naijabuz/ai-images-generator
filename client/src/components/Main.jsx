import React from "react";
import { Route, Routes } from "react-router-dom";

import styles from "../styles";
import { Home, CreatePost } from "../pages";

const Main = () => {
  return (
    <main
      className={`sm:p-8 px-4 py-8 w-full min-h-[calc(100vh-73px)] ${styles.main_bg}`}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </main>
  );
};

export default Main;
