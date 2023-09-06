import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ restaurant }) => {
    //   const { cards } = props;
    // console.log("Cards", restaurant);
    
    
    return (
      // <div className="res-container">
      //   {cards.map((card, index) => (
      //     <div key={index} className="res-card">
      //       <img
      //         className="res-logo"
      //         alt="res-logo"
      //         src={
      //           "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
      //           card.info.cloudinaryImageId
      //         }
      //       ></img>
      //       <h3>{card.info.name}</h3>
      //       <h3>{card.info.cuisines.join(" , ")}</h3>
      //       <h3>{card.info.avgRating} Stars</h3>
      //     </div>
      //   ))}
      // </div>
  
      // <div className="res-container">
        <div className="res-card m-4 p-4 w-[230px] bg-gray-100 hover:bg-gray-400 rounded-lg">
          <img
            className="res-logo rounded-lg"
            alt="res-logo"
            src={
                CDN_URL +
              restaurant.info.cloudinaryImageId
            }
          ></img>
          <h3 className="font-bold py-2">{restaurant.info.name}</h3>
          <h3>{restaurant.info.cuisines.join(" , ")}</h3>
          <h3>{restaurant.info.avgRating} Stars</h3>
        </div>
      // </div>
    );
  };

export const withPromotedLabel = (RestaurantCard) =>{
    return () =>{
        return (
            <div>
            <label>Promoted</label>
            <RestaurantCard/>
            </div>
        )
    }
}

export default RestaurantCard