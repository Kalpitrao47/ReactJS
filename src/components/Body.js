import RestaurantCard from "./RestaurantCard";
import cards from "../utils/mockData";
import { useState } from "react";


const Body = () => {
    const [filteredRestaurants, setFilteredRestaurants] = useState(cards);
    console.log("filteredRestaurants",filteredRestaurants)
  
  const handleFilterClick = () => {
    const filtered = cards.filter(restaurant => restaurant.info.avgRating > 4);
    setFilteredRestaurants(filtered);
  };


    return (
      <div className="body">
        <div className="filter">
            <button className="filter-btn" 
            onClick={handleFilterClick}
        //     onClick  = {() =>{
        //         console.log("Clicked")
        //     }
        // }
            >Top Rated Restaurant</button>
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
          {filteredRestaurants.map((restaurant)=>{
            return (
              <RestaurantCard key={restaurant.info.id} restaurant = {restaurant}/>
            )
          })}
  
        </div>
      </div>
    );
  };
export default Body