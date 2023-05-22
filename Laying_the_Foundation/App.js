import React, { createElement } from "react";
import ReactDOM from "react-dom/client";

const head=React.createElement("h1",{id:"heading"},"Abhi bhor bhayo");

console.log(head)

// JSX : HTML-like or XML-like Syntax
//JSX => Babel transpiles it to React.createElement => ReactElement -JS object => HTMLElement (render)

const jsxheading=<h1 className="head" tabIndex="1">Namaste React using JSX</h1>

console.log(jsxheading)

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxheading);

