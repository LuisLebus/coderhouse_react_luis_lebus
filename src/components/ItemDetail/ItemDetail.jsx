import React from "react";

import ItemCount from "../ItemCount/ItemCount";

export default function ItemDetail(props) {
  if (props.name === undefined) {
    return (
      <div className="container-fluid">
        <div className="row d-flex justify-content-center align-items-center m-3">
          <div className="col-12 col-sm-10 col-md-6">
            <div className="card text-center" aria-hidden="true">
              <div className="card-body">
                <h5 className="card-title placeholder-glow">
                  <span className="placeholder col-6"></span>
                </h5>
                <p className="card-text placeholder-glow">
                  <span className="placeholder col-12"></span>
                  <span className="placeholder col-12"></span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container-fluid">
        <div className="row d-flex justify-content-center align-items-center m-3">
          <div className="col-12 col-sm-10 col-md-6">
            <div className="card text-center">
              <img
                src={`../assets/images/${props.img}`}
                className="card-img-top"
                alt={props.name}
              />
              <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.detail}</p>
                <h3 className="card-text fw-bold">${props.price}</h3>
              </div>

              <ItemCount count={props.count} />

              <div className="card-footer text-muted text-uppercase">
                {props.category}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
