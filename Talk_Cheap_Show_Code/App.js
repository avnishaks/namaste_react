import React, { createElement } from "react";
import ReactDOM, { createRoot } from "react-dom/client";

const Tittle = () => (
  <img
    className="logo"
    alt="logo"
    src="https://static.ambitionbox.com/assets/v2/images/rs:fit:1280:960:false:false/bG9jYWw6Ly8vbG9nb3Mvb3JpZ2luYWxzL3N3aWdneS5qcGc.png"
  />
);

const Header = () => (
  <>
    <div className="header">
      {Tittle()}
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  </>
);

const Body = () => {
  return <h4> BodyComponent </h4>;
};
const Footer = () => {
  return <h4> FooterComponent </h4>;
};

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
