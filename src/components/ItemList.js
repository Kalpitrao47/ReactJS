import React from "react";

const ItemList = ({ items }) => {
  console.log("items", items);
  return (
    <>
      {items.map((i) => {
        return (
          <>
            <div key={i.id} className="flex justify-between bg-gray-400 shadow-lg p-4 rounded-lg m-2">
              
                <li>{i.title}</li>
                {/* <li>{i.itemCards}</li> */}
                {/* <div>{i.itemCards}</div> */}
              
                <span>{">"}</span>
            </div>
            
           
          </>
        );
      })}
    </>
  );
};

export default ItemList;
