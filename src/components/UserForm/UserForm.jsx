import { useState, React } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";

import Swal from "sweetalert2";
import { createBuyerOrder } from "../../services/firebase";

import InputForm from "./InputForm";

export default function UserForm() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const { cart, getTotalItemsPriceInCart, removeAllItemsFromCart } =
    useContext(cartContext);

  const navigate = useNavigate();

  function onInputChange(evt) {
    const name = evt.target.name;
    const value = evt.target.value;

    let newUserData = { ...userData };
    newUserData[name] = value;
    setUserData(newUserData);
  }

  function onSubmit(evt) {
    evt.preventDefault();

    const orderData = {
      buyerData: userData,
      cart: cart,
      total: getTotalItemsPriceInCart(),
      date: new Date(),
    };

    createBuyerOrder(orderData).then((resp) => {
      Swal.fire({
        title: "¡Compra realizada!",
        text: "Operación: " + resp,
        icon: "success",
        confirmButtonText: "Inicio",
      }).then((result) => {
        setTimeout(() => {
          removeAllItemsFromCart();
          navigate("/");
        }, 500);
      });
    });
  }

  return (
    <form onSubmit={onSubmit}>
      <InputForm
        value={userData.name}
        title="Nombre"
        name="name"
        required={true}
        onChange={onInputChange}
      />
      <InputForm
        value={userData.email}
        title="Email"
        name="email"
        required={true}
        onChange={onInputChange}
      />
      <InputForm
        value={userData.phone}
        title="Teléfono"
        name="phone"
        onChange={onInputChange}
      />
      <button type="submit" className="btn btn-outline-primary m-2">
        Comprar
      </button>
    </form>
  );
}
