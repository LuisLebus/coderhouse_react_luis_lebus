import React from "react";
import FlexWrapper from "../FlexWrapper/FlexWrapper";
import Item from "../Item/Item";

export function ItemList(props) {
  return (
    <div>
      <FlexWrapper>
        {props.characterList.map((element) => {
          return (
            <Item
              key={element.id}
              id={element.id}
              name={element.name}
              price={element.price}
              img={element.img}
            />
          );
        })}
      </FlexWrapper>
    </div>
  );
}
