import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

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

  console.log("itemCards", itemCards);

  return (
    <div>
      <h2>{name}</h2>
      <h3>
        {cuisines?.join(" , ")} - {costForTwoMessage}
      </h3>
      <ul>
        {itemCards && itemCards.map((item) => (
          <div key={item.card.info.id}>
            <li>{item.card.info.name}</li>
          </div>
        ))}
      </ul>
    </div>
  );
  
};

export default RestaurantMenu;
