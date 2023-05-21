import React, { createElement } from "react";
import ReactDOM from "react-dom/client";

const head=React.createElement("h1",{id:"heading"},"Abhi bhor bhayo");

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(head);