import { useState } from "react";
import { useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

import { getCharacter } from "../../mockAPI/mockAPI";

import { useParams } from "react-router-dom";

export default function ItemDetailContainer() {
  const [character, setCharacter] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    getCharacter(id).then((character) => {
      setCharacter(character);
    });
  }, [id]);

  return (
    <div>
      <ItemDetail
        name={character.name}
        img={character.img}
        count={character.count}
        detail={character.detail}
        price={character.price}
        category={character.category}
      />
    </div>
  );
}
