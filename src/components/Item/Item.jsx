import React from "react";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Item.css";

export default function Item(props) {
  return (
    <div className="card itemAnim">
      <img
        src={`../assets/images/${props.img}`}
        className="card-img-top"
        alt={props.name}
      />
      <div className="card-body text-center">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">${props.price}</p>
        <Link to={`/character/${props.id}`} className="btn btn-primary">
          Detalles
        </Link>
      </div>
    </div>
  );
}
