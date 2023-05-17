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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent)
