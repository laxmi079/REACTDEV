import React from "react";
import ReactDOM from "react-dom/client";

// Build children as array with keys
const childrenArray = [
  React.createElement("div", { id: "child", key: "child1" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
  React.createElement("div", { id: "child2", key: "child2" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
];

const parent = React.createElement("div", { id: "parent" }, childrenArray);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
