import { useContext } from "react";
import { cartContext } from "../../context/cartContext";

import ItemCount from "../ItemCount/ItemCount";
import Loader from "../Loader/Loader";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ItemDetail(props) {
  const { addItemToCart } = useContext(cartContext);

  function handleAddToCart(count) {
    addItemToCart(props, count);
    toast.info(`Agregaste ${count} ${props.name} al carrito`);
  }

  return (
    <div>
      {props.name === undefined ? (
        <Loader />
      ) : (
        <div className="container-fluid animate__animated animate__fadeIn">
          <div className="row d-flex justify-content-center align-items-center m-3">
            <div className="col-12 col-sm-10 col-md-6">
              <div className="card text-center shadow bg-body rounded">
                <img
                  src={props.img}
                  className="card-img-top"
                  alt={props.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{props.name}</h5>
                  <p className="card-text">{props.detail}</p>
                  <h3 className="card-text fw-bold">${props.price}</h3>
                </div>

                <ItemCount stock={props.stock} onAddToCart={handleAddToCart} />

                <div className="card-footer text-muted text-uppercase">
                  {props.category}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <ToastContainer autoClose={3000} />
    </div>
  );
}
