const heading1 = React.createElement("h1", {}, "Heading 1");
const heading2 = React.createElement("h2", {}, "Heading 2");
const container = React.createElement(
    "div",
    {
        id: "container",
        style: {
            backgroundColor: "#888",
        },
    },
    [heading1, heading2]
);

// console.log(heading); => returns an object
const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(root);

// passing a react element inside the root
root.render(container);
