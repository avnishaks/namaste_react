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
    <div className="flex justify-between">
      <Title />
      <div className="flex items-center justify-evenly">
        <ul className="flex ml-4 p-4 justify-evenly">
        
          <li className="px-4 hover:bg-pink-500 font-bold">Online Status : {onlineStatus ?" ✅":" 🔴"}</li>
          <li className="px-4 hover:bg-pink-500 font-bold"> <Link to="/">Home</Link></li>
          <li className="px-4 hover:bg-pink-500 font-bold"><Link to="/about">About</Link></li>
          <li className="px-4 hover:bg-pink-500 font-bold"><Link to="/contact">Contact</Link></li>
          <li className="px-4 hover:bg-pink-500 font-bold"><a href="/about">Cart</a></li>
          <li className="px-4 hover:bg-pink-500 font-bold"> <Link to="/grocery">Grocery</Link></li>
          <button className="px-4 hover:bg-pink-500 font-bold"
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