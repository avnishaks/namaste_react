import React, { createElement } from "react";
import ReactDOM from "react-dom/client";

// React Functional Component

const Tittle = () => (
  <h1 className="title" tabIndex="1">
    Namaste React using Tittle Component
  </h1>
);

const HeadingComponent = () => (
  <div id="container">
    <Tittle />
    <h1 className="head" tabIndex="1">
      Namaste React using Functional Component
    </h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
