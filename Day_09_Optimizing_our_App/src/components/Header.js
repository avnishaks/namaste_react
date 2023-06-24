import Title from "./Title";
import About from "./About";
import { useState ,useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

  const [ btnReact , setbtnReact ] = useState("Login");

  
  useEffect(()=>{
    console.log("Button is clicked => {Response from useEffecr}")
  },[btnReact])

  const onlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Online Status : {onlineStatus ?" ✅":" 🔴"}</li>
          <li> <Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><a href="/about">Cart</a></li>
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