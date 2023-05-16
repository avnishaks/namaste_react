const head=React.createElement(
    "h1",{
        id:"heading",
        xyz:"abc"
    },
"Hello World from React"
);

console.log(head); // return the object
const roots=ReactDOM.createRoot(document.getElementById("root"));
roots.render(head)