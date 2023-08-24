import RestaurantCard from "./RestaurantCard";
import cards from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  console.log("filteredRestaurants", filteredRestaurants);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // console.log("UseEffect Called")
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.2813939&lng=72.8788707&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      
      const restaurants = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      setFilteredRestaurants(restaurants);
      
      setIsLoading(false); // Once data is fetched, set isLoading to false
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleFilterClick = () => {
    const filtered = cards.filter(
      (restaurant) => restaurant.info.avgRating > 4
    );
    setFilteredRestaurants(filtered);
  };

  // if (filteredRestaurants === 0){
  //   return (
  //     <Shimmer/>
  //   )
  // }

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={handleFilterClick}
          //     onClick  = {() =>{
          //         console.log("Clicked")
          //     }
          // }
        >
          Top Rated Restaurant
        </button>
      </div>

      <div className="res-container">
        {/* <RestaurantCard cards={cards[0]} />
          <RestaurantCard cards={cards[1]} />
          <RestaurantCard cards={cards[2]} />
          <RestaurantCard cards={cards[3]} />
          <RestaurantCard cards={cards[4]} />
          <RestaurantCard cards={cards[5]} /> 
          <RestaurantCard cards={cards[6]} />
          <RestaurantCard cards={cards[7]} /> */}
        {/* {filteredRestaurants.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.info.id} restaurant={restaurant} />
          );
        })} */}

        {isLoading ? ( // Render Shimmer if isLoading is true
          <>
            <Shimmer />

            {/* Repeat Shimmer components for as many placeholders as you need */}
          </>
        ) : (
          // Render actual data if isLoading is false
          filteredRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} restaurant={restaurant} />
          ))
        )}
      </div>
    </div>
  );
};
export default Body;
