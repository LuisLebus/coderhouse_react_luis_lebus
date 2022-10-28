import { useState } from "react";
import { useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

import { getCharacter } from "../../services/firebase";

import { useParams } from "react-router-dom";
import GenericError from "../GenericError/GenericError";

export default function ItemDetailContainer() {
  const [character, setCharacter] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    getCharacter(id)
      .then((character) => {
        setCharacter(character);
      })
      .catch((error) => {
        setErrorMsg(error.message);
      });
  }, [id]);

  return (
    <div>
      {errorMsg !== null ? (
        <GenericError msg={errorMsg} />
      ) : (
        <ItemDetail
          name={character.name}
          img={character.img}
          stock={character.stock}
          detail={character.detail}
          id={character.id}
          price={character.price}
          category={character.category}
        />
      )}
    </div>
  );
}
