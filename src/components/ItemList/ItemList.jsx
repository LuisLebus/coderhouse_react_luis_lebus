import React from "react";
import Item from "../Item/Item";
import Loader from "../Loader/Loader";

export function ItemList(props) {
  return (
    <div className="d-flex flex-wrap justify-content-center align-items-center gap-5 m-5">
      {props.characterList.length === 0 ? (
        <Loader />
      ) : (
        props.characterList.map((element) => {
          return (
            <Item
              key={element.id}
              id={element.id}
              name={element.name}
              price={element.price}
              img={element.img}
            />
          );
        })
      )}
    </div>
  );
}
