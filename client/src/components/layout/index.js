import React from "react";
import Header from "./header";
import Footer from "./footer";

const DefaultLayout = (props) => {
  return (
    <>
      <Header />
      <div>{props.children}</div>
      <Footer />
    </>
  );
};

export default DefaultLayout;
