import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";

import UserForm from "../UserForm/UserForm";

export default function Cart() {
  const { cart, isCartEmpty, getTotalItemsPriceInCart } =
    useContext(cartContext);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center m-5 animate__animated animate__fadeIn">
      {isCartEmpty() ? (
        <div className="d-flex flex-column justify-content-center align-items-center gap-3">
          <h1 className="text-primary fw-bold">Carrito vacío</h1>
          <Link className="btn btn-primary" to="/">
            Inicio
          </Link>
        </div>
      ) : (
        <div className="w-100 d-flex flex-column justify-content-center align-items-center ">
          <ol className="list-group list-group-numbered w-100">
            {cart.map((element) => {
              return (
                <CartItem
                  key={element.id}
                  id={element.id}
                  name={element.name}
                  price={element.price}
                  img={element.img}
                  count={element.count}
                />
              );
            })}
          </ol>

          <div className="m-5 p-4 ps-5 pe-5 border border-primary border-2 rounded-5 text-center">
            <h2 className="m-3 p-3">{`Total $${getTotalItemsPriceInCart()}`}</h2>
            <UserForm />
          </div>
        </div>
      )}
    </div>
  );
}
