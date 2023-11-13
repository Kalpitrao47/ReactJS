import { useEffect, useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";



const Header = () => {
  const [btnName,setBtnName] = useState("Login")
  console.log("Header Called")

  useEffect(()=>{
    console.log("useEffect Called")
  },[]);

  const handleClick  = () =>{
    btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")}

  const onlineStatus = useOnlineStatus;  

  const {loggedInUser} = useContext(UserContext);
  console.log("data",loggedInUser)


  const cartItems = useSelector((store) =>store.cart.items)


    return (
      <div className="flex justify-between shadow-lg m-2">
        <div className="logo-container">
          <img
            className="w-56"
            src={LOGO_URL}
          />
        </div>
        <div className="flex items-center">
          <ul className="flex p-4 m-4">
            <li className="px-2">
              Online Status: 
            </li>
            <li className="px-2">
            <Link to="/">
              Home
              </Link>
              </li>
            <li className="px-2">
            <Link to="/about">
              About Us
              </Link>
              </li>
            <li className="px-2">
            <Link to="/contact">
              Contact Us
              </Link>
              </li>
              <li className="px-2">
            <Link to="/grocery">
              Grocery
              </Link>
              </li>
            <li className="px-2">
              Cart({cartItems.length})</li>
            <li className="px-2"><button className="login" onClick={handleClick}>{btnName}</button></li>
            <li className="px-2 font-bold">
              {loggedInUser}</li>
          </ul>
        </div>

      </div>
    );
  };

export default Header;