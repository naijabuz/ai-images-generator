import React from "react";
import { Link } from "react-router-dom";

import { logo } from "../assets";
import styles from "../styles";

const Header = () => {
  return (
    <header
      className={`w-full flex justify-between items-center ${styles.header_bg} sm:px-8 py-4 border-b border-b-[#e6ebf4]`}
    >
      <Link to="/">
        <img
          src={logo}
          alt="app-logo"
          className={`w-28 object-contain ${styles.header_bg}`}
        />
      </Link>

      <Link
        to="/create-post"
        className={`font-inter font-medium ${styles.btn_bg} ${styles.btn_color} px-4 py-2 rounded-md`}
      >
        Create
      </Link>
    </header>
  );
};

export default Header;
