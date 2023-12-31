import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import cards from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  console.log("filteredRestaurants", filteredRestaurants);
  const [filteredRestaurants2, setFilteredRestaurants2] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchText, setSearchtext] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard); 

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

      const restaurants =
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setFilteredRestaurants(restaurants);
      setFilteredRestaurants2(restaurants);

      setIsLoading(false); // Once data is fetched, set isLoading to false
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleFilterClick = () => {
    const filtered = cards.filter(
      (restaurant) => restaurant.info.avgRating > 4
    );
    setFilteredRestaurants2(filtered);
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false )
    return (
      <h1>Please Check your internet connection</h1>
      )

  // if (filteredRestaurants === 0){
  //   return (
  //     <Shimmer/>
  //   )
  // }

  return (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchtext(e.target.value);
            }}
          ></input>
          <button className="px-2 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              //Filter the Restaurants Cards and filter the UI.
              console.log(searchText)
              const filterRes = filteredRestaurants.filter((res)=>{
                return (
                  res.info.name.toLowerCase().includes(searchText.toLocaleLowerCase())
                )
                
              })

              setFilteredRestaurants2(filterRes)
                console.log("Now Check",filteredRestaurants)
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
        <button
          className="filter-btn px-2 py-2 bg-gray-100 m-4 rounded-lg"
          onClick={handleFilterClick}
          //     onClick  = {() =>{
          //         console.log("Clicked")
          //     }
          // }
        >
          Top Rated Restaurant
        </button>
        </div>
      </div>

      <div className="res-container flex flex-wrap">
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
          filteredRestaurants2.map((restaurant) => (
            <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
            <RestaurantCard restaurant={restaurant} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};
export default Body;
