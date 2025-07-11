        
        //  <div id="parent">
        //     <div id="child">
        //         <h1>I am h1</h1>
        //         <h2>I am h2</h2>
        //     </div>
        //  </div>

         const parent=React.createElement("div",{id:"parent"},
            [React.createElement("div",{id:"child"},[React.createElement("h1",{},"I am h1 tag"),React.createElement("h2",{},"I am h2 tag")]),
            React.createElement("div",{id:"child"},[React.createElement("h1",{},"I am h1 tag"),React.createElement("h2",{},"I am h2 tag")]) ]);
        
        // const heading=React.createElement("h1",
        //     {id:"heading" , xyz:"abc"},"hello form react");
        const root=ReactDOM.createRoot(document.getElementById("root"));
        root.render(parent);