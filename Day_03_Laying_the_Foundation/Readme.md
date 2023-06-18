1. Adding the script in package.json then we able to run the script

"scripts": {
    "test": "jest",
    "start": "parcel index.html",
    "build": "parcel build index.html"
}

npm run start or npm start [ Build Development Project ] => start is keyword reserved by npm
npm run build [ Build Production Project ]
--------------------------------------------------------------------------------------------------------------------------------
2. What is JSX ?

Ans :- JavaScript XML helps us to add or create the html inside the React Project.
--------------------------------------------------------------------------------------------------------------------------------
3. What happen when we write the code in JavaScript in project , is JS Engine understand it ?

JSX => Babel transpiles it to React.createElement => ReactElement -JS object => HTMLElement (render)

Ans : JavaScript understand the Ecmma Script language (ES+{number})=> ES6 language , when we 
write the code , it gets transpiled before going to the JS engine , so that browser can understand.

Tanspilation of code is Done by Parcel bundle module , we have install only parcel bundle module
but parcel itself installed its own package management bable , to perform this task for Transpilation.

All the Below code is Transpiled before going to the JS engine, so browser can understand :- 

import React, { createElement } from "react";
import ReactDOM from "react-dom/client";

const head=React.createElement("h1",{id:"heading"},"Abhi bhor bhayo");

console.log(head)

// JSX : HTML-like or XML-like Syntax
const jsxheading=<h1 id="heading">Namaste React using JSX</h1>

console.log(jsxheading)

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxheading);
EXAMPLE :- 
Transpilation / Compilation  image is uploaded for JS code by Babel !
--------------------------------------------------------------------------------------------------------------------------------
4. For giving the attributes to the JSX we need to provide in the camel case.
For eg :- className , tabIndex
--------------------------------------------------------------------------------------------------------------------------------
5. For writing the JSX in the multi line we need to wrap the JSX in the () => Brackets .
For eg:- 
const jsxheading=(<h1 className="head" tabIndex="1">Namaste React using JSX</h1>)
--------------------------------------------------------------------------------------------------------------------------------

6. React Component 

Their are mainly two types of components in the React :- 
1. Class Based Component - OLD way of writing code
2. Functional Component - NEW way of writing code -> declare variables in capital letter

Functional Component : 
a. A Function that return the JSX code is called the Functional Component.
b. A functional that return the React Element.


React Element vs React Component

// React Element 
const heading = (
  <h1 className="head" tabIndex="1">
    Namaste React using JSX
  </h1>
);

// React Component 
const Heading =()=> (
  <h1 className="head" tabIndex="1">
    Namaste React using JSX
  </h1>
);

To render the React Component

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);

--------------------------------------------------------------------------------------------------------------------------------


7. Putting the React Element inside the React Component 

// React Element
const shape=(
    <h1>Its a new shape and formation</h1>
)

// Putting the React Element inside the React Component

const HeadingComponent = () => (
  <div id="container">
    {shape}
    <Tittle />
    <h1 className="head" tabIndex="1">
      Namaste React using Functional Component
    </h1>
  </div>
);


using normal {} => Brackets , gets the variables inserted inside it. 
Same way goes for putting the React Element inside the React Element

Functional Component is the Javascript Function at the end of the Day 
--------------------------------------------------------------------------------------------------------------------------------

8. JSX has only one parent div element  , to avoid this issues , we have react fragments , to get more
parent we use Fragment for JSX

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


End of Epiosde 3 : Layout The Foundation

Fundamentals of JSX with React Element and React Component is covered !


