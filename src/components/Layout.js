import React from "react";
import Sidebar from "./Sidebar/Sidebar.js";
import Header from "./Header/Header.js";
import Content from "./Content";

const Layout = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <Content />
    </>
  );
};

export default Layout;
