import React, { createElement } from "react";
import ReactDOM,{createRoot} from "react-dom/client";

// React Functional Component

const shape = <h1>Its a new shape and formation</h1>;

const Tittle = () => (
  <h1 className="title" tabIndex="1">
    Namaste React using Tittle Component
  </h1>
);

const HeadingComponent = () => (
  <>
    <div id="container">
      {shape}
      <Tittle />
      <h1 className="head" tabIndex="1">
        Namaste React using Functional Component
      </h1>
    </div>
    <div id="container2"></div>
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
