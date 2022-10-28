import { createContext, useState } from "react";

const cartContext = createContext();

function CartContextProvider(props) {
  const [cart, setCart] = useState([]);

  function addItemToCart(item, count) {
    let newCart = [...cart];

    if (isItemInCart(item.id)) {
      let itemIndex = newCart.findIndex((element) => {
        return element.id === item.id;
      });

      newCart[itemIndex].count += count;
    } else {
      let newItem = { ...item, count };
      newCart.push(newItem);
    }

    setCart(newCart);
  }

  function removeItemFromCart(id) {
    let newCart = cart.filter((element) => {
      return element.id !== id;
    });

    setCart(newCart);
  }

  function isCartEmpty() {
    return !Boolean(cart.length);
  }

  function isItemInCart(id) {
    let isInCart = cart.some((element) => {
      return element.id === id;
    });

    return isInCart;
  }

  function removeAllItemsFromCart() {
    setCart([]);
  }

  function getTotalItemsCountInCart() {
    let totalItemsCountInCart = 0;

    cart.forEach((element) => {
      totalItemsCountInCart += element.count;
    });

    return totalItemsCountInCart;
  }

  function getTotalItemsPriceInCart() {
    let totalItemsPriceInCart = 0;

    cart.forEach((element) => {
      totalItemsPriceInCart += element.count * element.price;
    });

    return totalItemsPriceInCart;
  }

  return (
    <>
      <cartContext.Provider
        value={{
          cart,
          addItemToCart,
          removeItemFromCart,
          removeAllItemsFromCart,
          getTotalItemsCountInCart,
          getTotalItemsPriceInCart,
          isCartEmpty,
        }}
      >
        {props.children}
      </cartContext.Provider>
    </>
  );
}

export { cartContext, CartContextProvider };
