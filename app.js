import React from "react";
import ReactDOM from "react-dom/client";

// const heading  = React.createElement("h1", {}, "Hello World from Rao");
//     const root = ReactDOM.createRoot(document.getElementById("root"))

//     root.render(heading)

// Create this and render on the page.
{
  /* <div id = "parent">
    <div id = "child">
        <h1></h1>
    </div>
</div> */
}

// const parent = React.createElement("div", {id:"parent"},React.createElement("div", {id:"child"},React.createElement("h1", {}, "I am An h2 Tag")))

// const child  =  ReactDOM.createRoot(document.getElementById("root"))

// child.render(parent)

//React element
const jsxheading =( <h1 className="head">USing JSx</h1>);


//React Components
//Class Based Components
//Functional Based Components

const TitleComponent = () =>{
    return (
    <h1>USing Functional Component Title</h1>
    )
}


const HeaderComponent = () =>{
    return (
        <>     
        {TitleComponent()} 
        {TitleComponent()}   
         {/* <TitleComponent/> */}
    <h1>USing Functional Component</h1>
    </>

    )
}

const child = ReactDOM.createRoot(document.getElementById("root"));

child.render(<HeaderComponent/>);


