import React from "react";
import { useState } from "react";

export default function ItemCount(props) {
  const [count, setCount] = useState(0);

  function onIncreaseButton() {
    if (count < props.stock) {
      setCount(count + 1);
    }
  }

  function onDecreaseButton() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  function onAddButton() {
    if (count > 0) {
      props.onAddToCart(count);
    }
  }

  return (
    <div className="m-4 p-3 border border-primary border-2 rounded-5">
      <div className="d-flex flex-column justify-content-center align-items-center gap-2">
        <div className="d-flex justify-content-center align-items-center gap-5">
          <button
            type="button"
            className="btn btn-outline-dark"
            onClick={onDecreaseButton}
          >
            -
          </button>

          <h4>{count}</h4>

          <button
            type="button"
            className="btn btn-outline-dark"
            onClick={onIncreaseButton}
          >
            +
          </button>
        </div>
        <div>
          <p className="text-muted fs-6">{`Disponible: ${props.stock}`}</p>
        </div>
      </div>

      <button
        type="button"
        className="btn btn-outline-primary m-2"
        onClick={onAddButton}
      >
        Agregar al carrito
      </button>
    </div>
  );
}
