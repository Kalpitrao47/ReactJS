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

const RestaurantCard = ({cards}) => {
//   const { cards } = props;
  console.log("Cards", cards);
  return (
    <div className="res-container">
      {cards.map((card, index) => (
        <div key={index} className="res-card">
          <img
            className="res-logo"
            alt="res-logo"
            src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+card.info.cloudinaryImageId}
          ></img>
          <h3>{card.info.name}</h3>
          <h3>{card.info.cuisines.join(" , ")}</h3>
          <h3>{card.info.avgRating} Stars</h3>
        </div>
      ))}
 </div>
  );
};

const cards = [
    {
        "info": {
          "id": "53762",
          "name": "Pizza Hut",
          "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
          "locality": "Latif Park",
          "areaName": "Mira Road",
          "costForTwo": "₹350 for two",
          "cuisines": [
            "Pizzas"
          ],
          "avgRating": 3.8,
          "feeDetails": {
            "restaurantId": "53762",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 3200
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 3200
          },
          "parentId": "721",
          "avgRatingString": "3.8",
          "totalRatingsString": "10K+",
          "sla": {
            "deliveryTime": 20,
            "lastMileTravel": 1.3,
            "serviceability": "SERVICEABLE",
            "slaString": "20 mins",
            "lastMileTravelString": "1.3 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-08-28 00:00:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "discountCalloutInfo": {
              "message": "Free Delivery",
              "logoCtx": {
                "logo": "v1655895371/free_delivery_logo_hqipbo.png"
              }
            }
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/pizza-hut-latif-park-mira-road-mumbai-53762",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "33487",
          "name": "Domino's Pizza",
          "cloudinaryImageId": "u0eh2fvlyxhlyxj01exw",
          "locality": "Iraisa Coop Housing Society",
          "areaName": "Mira Road",
          "costForTwo": "₹400 for two",
          "cuisines": [
            "Pizzas",
            "Italian",
            "Pastas",
            "Desserts"
          ],
          "avgRating": 3.9,
          "feeDetails": {
            "restaurantId": "33487",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 3200
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 3200
          },
          "parentId": "2456",
          "avgRatingString": "3.9",
          "totalRatingsString": "5K+",
          "sla": {
            "deliveryTime": 25,
            "serviceability": "SERVICEABLE",
            "slaString": "25 mins",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-08-21 23:59:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "₹125 OFF",
            "subHeader": "ABOVE ₹999",
            "discountTag": "FLAT DEAL"
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/dominos-pizza-iraisa-coop-housing-society-mira-road-mumbai-33487",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "27631",
          "name": "Subway",
          "cloudinaryImageId": "1ace5fa65eff3e1223feb696c956b38b",
          "locality": "Kanakia Junction",
          "areaName": "Mira Road",
          "costForTwo": "₹350 for two",
          "cuisines": [
            "Salads",
            "Snacks",
            "Desserts",
            "Beverages"
          ],
          "avgRating": 3.9,
          "feeDetails": {
            "restaurantId": "27631",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 3200
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 3200
          },
          "parentId": "2",
          "avgRatingString": "3.9",
          "totalRatingsString": "10K+",
          "sla": {
            "deliveryTime": 18,
            "lastMileTravel": 1.6,
            "serviceability": "SERVICEABLE",
            "slaString": "18 mins",
            "lastMileTravelString": "1.6 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-08-22 02:00:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "40% OFF",
            "subHeader": "UPTO ₹80",
            "discountCalloutInfo": {
              "message": "Free Delivery",
              "logoCtx": {
                "logo": "v1655895371/free_delivery_logo_hqipbo.png"
              }
            }
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/subway-kanakia-junction-mira-road-mumbai-27631",
          "type": "WEBLINK"
        }
      },
   
  ]




const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard cards={cards} />
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
