// const head = React.createElement(
//     "h1", {
//     id: "heading",
//     xyz: "abc"
// },
//     "Hello World from React"
// );


// console.log(head); // return the object
// const roots = ReactDOM.createRoot(document.getElementById("root"));
// roots.render(head)


/** Nested element tag in the react just like html 
 * Sample of Nested Element in Html tag
 * <div id="parent">
 *      <div id="child1">
 *           <h1></h1>
 *           <h2></h2>   
 *      </div>
 *      <div id="child2">
 *           <h1></h1>
 *           <h2></h2>
 *      </div>
 * </div>
 * 
 * 
*/

const parent = React.createElement(
    "div",
    { id: "parent" },
    [
        React.createElement("div", { id: "child1" },
        [ 
            React.createElement("h1", {}, "I am h1 of child1 tag"),
            React.createElement("h2", {}, "I am h2 of child1 tag"),
        
        ]),
        React.createElement("div", { id: "child2" },
        [ 
            React.createElement("h1", {}, "I am h1 of child2 tag"),
            React.createElement("h2", {}, "I am h2 of child2 tag"),
        ]),

    ]
   

);


console.log(parent); // return the object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent)
/*
1. root.render(parent) -> sending the parent element to the html div="root" , if the div has alredy
have the element in the div tag then the h1 tag of div=root is replaced by parent
*/