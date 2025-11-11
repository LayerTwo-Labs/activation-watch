import React from "react";
import Footer from "./Footer";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <>
        {children}
      <Footer />
    </>
  );
};
export default Layout;