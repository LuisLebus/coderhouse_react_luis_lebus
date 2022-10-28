import { useState } from "react";
import { useEffect } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

import { getAllCharacters } from "../../services/firebase";

import { getCharactersByCategory } from "../../services/firebase";

import GenericError from "../GenericError/GenericError";

export default function ItemListContainer() {
  const [characterList, setCharacterList] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    setCharacterList([]);
    setErrorMsg(null);

    if (id === undefined) {
      getAllCharacters()
        .then((characters) => {
          setCharacterList(characters);
        })
        .catch((error) => {
          setErrorMsg(error.message);
        });
    } else {
      getCharactersByCategory(id)
        .then((characters) => {
          setCharacterList(characters);
        })
        .catch((error) => {
          setErrorMsg(error.message);
        });
    }
  }, [id]);

  return (
    <div>
      {errorMsg !== null ? (
        <GenericError msg={errorMsg} />
      ) : (
        <ItemList characterList={characterList} />
      )}
    </div>
  );
}
