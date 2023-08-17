// const heading  = React.createElement("h1", {}, "Hello World from Rao");
//     const root = ReactDOM.createRoot(document.getElementById("root"))

//     root.render(heading)


// Create this and render on the page.
{/* <div id = "parent">
    <div id = "child">
        <h1></h1>
    </div>
</div> */}

const parent = React.createElement("div", {id:"parent"},React.createElement("div", {id:"child"},React.createElement("h1", {}, "I am An h1 Tag")))

const child  =  ReactDOM.createRoot(document.getElementById("root"))

child.render(parent)


