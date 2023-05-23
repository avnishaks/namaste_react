import React, { createElement } from "react";
import ReactDOM ,{createRoot} from "react-dom/client";


const Tittle =()=>(
  <h1 className="title" key="h1">
   Food Villa
  </h1>
);

const AppLayout =()=>{
  return(
  {
    /*
    Header
      - Logo
      - Nav iteam (Right side)
      - Cart  
    Body Component
      -Search Bar
      -Resturant List
        -Resturant cards 
            - Image
            - Name 
            - Rating 
            - Cusines
     Footer
      - link
      - Copyright
    */
  }
)
}

const HeadingComponent = () => (
  <>
    <div id="container">
      {Tittle()}
      <h1 className="head" tabIndex="1">
        Namaste React using Functional Component
      </h1>
    </div>
  </>
);
  

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
