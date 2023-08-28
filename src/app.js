import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

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
const jsxheading = <h1 className="head">USing JSx</h1>;

//React Components
//Class Based Components
//Functional Based Components

// const TitleComponent = () =>{
//     return (
//     <h1>USing Functional Component Title</h1>
//     )
// }

// const HeaderComponent = () =>{
//     return (
//         <>
//         {TitleComponent()}
//          {/* <TitleComponent/> */}
//     <h1>USing Functional Component</h1>
//     </>

//     )
// }









const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      <Outlet/>
      
      {/* //Body
            //Footer */}
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    children:[
      {
        path: "/",
        element: <Body/>,
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu/>
      },
    ],
    errorElement: <Error/>,
  },
  
]
  )

const child = ReactDOM.createRoot(document.getElementById("root"));

// child.render(<AppLayout />);
child.render(<RouterProvider router={appRouter} />);

