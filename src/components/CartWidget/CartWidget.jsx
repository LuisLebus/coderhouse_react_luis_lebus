import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";

export default function CartWidget(props) {
  const { getTotalItemsCountInCart } = useContext(cartContext);

  return (
    <div>
      <Link to="/cart">
        <img
          className="me-1"
          src={`${process.env.PUBLIC_URL}/assets/images/shop-cart-icon.png`}
          alt="Shop Cart"
          width={60}
        />
        {getTotalItemsCountInCart() !== 0 && (
          <span className="badge bg-primary rounded-pill ">{`${getTotalItemsCountInCart()}`}</span>
        )}
      </Link>
    </div>
  );
}
