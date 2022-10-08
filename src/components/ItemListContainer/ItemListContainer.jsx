import { useState } from "react";
import { useEffect } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import {
  getAllCharacters,
  getCharactersByCategory,
} from "../../mockAPI/mockAPI";

export default function ItemListContainer() {
  const [characterList, setCharacterList] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    if (id === undefined) {
      getAllCharacters().then((characters) => {
        setCharacterList(characters);
      });
    } else {
      getCharactersByCategory(id).then((characters) => {
        setCharacterList(characters);
      });
    }
  }, [id]);

  return (
    <div>
      <ItemList characterList={characterList} />
    </div>
  );
}
