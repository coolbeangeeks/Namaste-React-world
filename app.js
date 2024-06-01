const heading= React.createElement("h1",{id:"heading"},"Hello world from react");
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

{/* <div id="parent">
<div id="child">
<h1>i am nested h1 tag</h1>
</div> */}

const nestedDiv=React.createElement("div",{id:"parent"},
React.createElement("div",{id:"child"},
[React.createElement("h1",{},"i am nested h1 tag"),React.createElement("h2",{},"i am nested h2 tag")]));
root.render(nestedDiv)