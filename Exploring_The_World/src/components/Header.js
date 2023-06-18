import Title from "./Title";
import { useState } from "react";
const Header = () => {

  const [ btnReact , setbtnReact ] = useState("Login");

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login"
            onClick={()=>{
              btnReact==="Login"?setbtnReact("LogOut"):setbtnReact("Login");
            }}
          >
            {btnReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;