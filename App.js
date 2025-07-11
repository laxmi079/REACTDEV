import React from "react";
import ReactDOM from "react-dom/client";

// Build children as array with keys
// const childrenArray = [
//   React.createElement("div", { id: "child", key: "child1" }, [
//     React.createElement("h1", {}, "I am h1 tag"),
//     React.createElement("h2", {}, "I am h2 tag"),
//   ]),
//   React.createElement("div", { id: "child2", key: "child2" }, [
//     React.createElement("h1", {}, "I am h1 tag"),
//     React.createElement("h2", {}, "I am h2 tag"),
//   ]),
// ];

// const parent = React.createElement("div", { id: "parent" }, childrenArray);

// const heading=React.createElement("h1",{id:"heading"},"this is laxmi 2");

// jsx
//babel transpiles  the jsx code => ReactElement => JS object => HTML Element(render)

//React Element
// const jsxheading=(
//    <div>
//       <h1>this is babel</h1>
//    </div>
// );

//React component
const Title=()=><h1>This is title</h1>

//component composition
const Headingcomponent=()=>{
   return (
         <div>
            <Title/>
            <h1>
                THIS IS HEADING
            </h1>
         </div>
   );
};

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Headingcomponent/>);

