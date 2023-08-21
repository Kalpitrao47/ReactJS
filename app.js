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

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://assets.materialup.com/uploads/61d86780-be13-47fa-81a6-226aac22db27/preview.jpg"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ee5f8e06b300efc07c9fe3f4df40dfc4"
      ></img>
      <h3>{props.name}</h3>
      <h4>{props.cuisine}</h4>
      <h4>{props.ratings}</h4>
      <h4>{props.delivery}</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard name= "Meghana Foods" cuisine = "Burger,Indian,Asian" ratings = "4.4 Stars" delivery = "38 minutes"/>
        <RestaurantCard name= "Chegna Foods" cuisine = "Chinese,Indian,Asian" ratings = "3.4 Stars" delivery = "20 minutes"/>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      <Body />
      {/* //Body
            //Footer */}
    </div>
  );
};

const child = ReactDOM.createRoot(document.getElementById("root"));

child.render(<AppLayout />);

/*
Header
- Logo
- Nav Links

Body
- Search
- Restaurant Container
- Reastaurant Card
    -Img
    -Name Of Res,Star Rating,cuisine,del time.

Footer
- Copyright
- Links
- Address
- Contact


*/
