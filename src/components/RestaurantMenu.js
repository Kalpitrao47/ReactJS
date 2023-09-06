import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);
  // console.log("resInfo", resInfo);

  const {resId} = useParams();

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const data = await fetch(
  //     MENU_API + resId
  //   );
  //   const json = await data.json();
  //   setResInfo(json.data);
  // };

  const resInfo = useRestaurantMenu(resId);

  if (!resInfo) {
    // You can render a loading state here if needed
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  console.log("itemCards",  resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory")

  console.log("categories",resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

  return (
    <div className="text-center">
      <h2 className="font-bold my-6 text-2xl">{name}</h2>
      <h3 className="font-bold text-lg">
        {cuisines?.join(" , ")} - {costForTwoMessage}
      </h3>

      {/* Categories Accordian*/}

      {categories.map((category)=>{
        return (
         <RestaurantCategory data={category?.card?.card}/>
        )
      })}
      
    </div>
  );
  
};

export default RestaurantMenu;
