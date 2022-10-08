import React from "react";
import { useState } from "react";

export default function ItemCount(props) {
  const [count, setCount] = useState(0);

  function increaseButton() {
    if (count < props.count) {
      setCount(count + 1);
    }
  }

  function decreaseButton() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  function onAdd() {
    console.log("on Add");
  }

  return (
    <div className="m-4 p-3 border border-success border-2 rounded-5">
      <div className="d-flex flex-column justify-content-center align-items-center gap-2">
        <div className="d-flex justify-content-center align-items-center gap-5">
          <button
            type="button"
            className="btn btn-outline-dark"
            onClick={decreaseButton}
          >
            -
          </button>

          <h4>{count}</h4>

          <button
            type="button"
            className="btn btn-outline-dark"
            onClick={increaseButton}
          >
            +
          </button>
        </div>
        <div>
          <p className="text-muted fs-6">{`Disponible: ${props.count}`}</p>
        </div>
      </div>

      <button
        type="button"
        className="btn btn-outline-success m-2"
        onClick={onAdd}
      >
        Agregar al carrito
      </button>
    </div>
  );
}
