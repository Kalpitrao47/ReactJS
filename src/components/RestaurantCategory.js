import React from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
  console.log("Restaurant Category Data", data);
  return (
    <div>
      {/*Accordian Header*/}
      <div className="w-6/12 mx-auto my-4 bg-gray-200 shadow-lg p-4 rounded-lg ">
        <div className="flex justify-between">
          <span className="font-bold text-lg">
            {data.title} ({data.categories.length})
          </span>
          <span>{">"}</span>
        </div>
        <div className="bg-gray-300 shadow-lg p-4 rounded-lg">
            <span><ItemList items={data.categories}/></span>
        </div>
      </div>
      {/*Accordian Body*/}
      
    </div>
  );
};

export default RestaurantCategory;
