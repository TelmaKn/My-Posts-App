import React from "react";
import Navbar from "../navbar/NavBar";
import "./layout.css";

const Layout = (props) => {
  return (
    <>
      <Navbar />
      {props.children}
    </>
  );
};

export default Layout;
