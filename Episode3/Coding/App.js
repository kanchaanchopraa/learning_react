import React from "react";
import ReactDOM from "react-dom";

// JSX
const jsxHeading = <h2 id="heading"> hello I am JSX Heading</h2>;
console.log(jsxHeading);

// Functional Component
const Heading = () => {
    return <h1>I am title of heading functional component</h1>
}

const Container = () => {
    return (
        <div id="container">
            <Heading/>
            <h2>I am heading of container functional component</h2>
        </div>
    );
}

// Creating a root element for React to render the component
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(<Container />);