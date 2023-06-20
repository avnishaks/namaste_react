import Title from "./Title";
import About from "./About";
import { useState ,useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {

  const [ btnReact , setbtnReact ] = useState("Login");

  
  useEffect(()=>{
    console.log("CallBack of useEffect")
  },[btnReact])

  console.log("header body")

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li> <Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><a href="/about">Cart</a>t</li>
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