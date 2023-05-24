import React, { createElement } from "react";
import ReactDOM, { createRoot } from "react-dom/client";

const Tittle = () => (
  <img
    className="logo"
    alt="logo"
    src="https://static.ambitionbox.com/assets/v2/images/rs:fit:1280:960:false:false/bG9jYWw6Ly8vbG9nb3Mvb3JpZ2luYWxzL3N3aWdneS5qcGc.png"
  />
);

const Header = () => {
  return (
    <div className="header">
     <Tittle/>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
};

const BurgerKing={
  name:"BurgerKing",
  img:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/0dca660dbdf2e04f9b861c4426ffd41e",
  cousines: ["Beverages","Bakery","Fast Food"],
  ratings: "4.2"
}

const RestrauntCard = () => {
  return (
    <div className="card">
       <img src={BurgerKing.img} />
       <h5>{BurgerKing.name}</h5>
       <h6>{BurgerKing.cousines.join(",")}</h6>
       <h7>{BurgerKing.ratings} stars</h7>

    </div>
  );
};

const Body = () => {
  return (
    <div className="restro-list">
      <RestrauntCard/>
      <RestrauntCard/>
      <RestrauntCard/>
      <RestrauntCard/>
      <RestrauntCard/>
      <RestrauntCard/>
      <RestrauntCard/>
      <RestrauntCard/>
      <RestrauntCard/>
      <RestrauntCard/>
      <RestrauntCard/>
      <RestrauntCard/>
    </div>
  );
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
