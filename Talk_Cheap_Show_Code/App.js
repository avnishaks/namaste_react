import React, { createElement } from "react";
import ReactDOM ,{createRoot} from "react-dom/client";


const Tittle =()=>(
  <h1 className="title" key="h1">
   Food Villa
  </h1>
);

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



const AppLayout =()=>(
  <h1 className="title" key="h1">
   Food Villa
  </h1>
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
