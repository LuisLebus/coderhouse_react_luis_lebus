import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";

export default function CartItem(props) {
  const [isActive, setIsActive] = useState(false);
  const { removeItemFromCart } = useContext(cartContext);

  function onDeleteButton() {
    setIsActive(true);

    setTimeout(() => {
      removeItemFromCart(props.id);
    }, 1000);
  }

  return (
    <div>
      <li
        className={`list-group-item d-flex justify-content-between align-items-center animate__animated ${
          isActive && "animate__fadeOut"
        }`}
      >
        <div>
          <Link to={`/character/${props.id}`}>
            <div className="fw-bold">{props.name}</div>
          </Link>
          Cantidad: {props.count}
        </div>

        <div>
          <div className="fs-4">${props.price}</div>
        </div>

        <button type="button" className="btn btn-outline-secondary">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/delete.png`}
            alt="Eliminar"
            width={20}
            onClick={onDeleteButton}
          />
        </button>
      </li>
    </div>
  );
}
