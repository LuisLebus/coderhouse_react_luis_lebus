import { useEffect } from "react";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import NavBar from "./components/NavBar/NavBar";
import Error404 from "./components/Error404/Error404";
import { CartContextProvider } from "./context/cartContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "animate.css";

function App() {
  useEffect(() => {
    document.title = "Atenea";
  }, []);

  return (
    <CartContextProvider>
      <BrowserRouter basename={`${process.env.PUBLIC_URL}`}>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/character/:id" element={<ItemDetailContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
