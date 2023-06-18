import React, { createElement } from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Title from "./components/Title";
import Body from "./components/Body";
import RestrauntCard from "./components/ResataurantCard";
import Footer from "./components/Footer";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
