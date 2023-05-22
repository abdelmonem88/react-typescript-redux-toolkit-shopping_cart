import { useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getTotals } from "../../store/featurs/cart/cartSlice";
import "./style.css";

type Props = {};

const Navbar = (props: Props) => {
  const dispatch = useAppDispatch();
  const { cartProducts, cartTotalAmount } = useAppSelector(
    (state) => state.cart
  );

  useEffect(() => {
    dispatch(getTotals());
  }, [dispatch, cartProducts]);

  return (
    <nav>
      <Link to="/">
        <div className="logo">
          <h1>Shoping Cart</h1>
        </div>
      </Link>
      <Link to="/cart">
        <div className="cart_icon">
          <FaShoppingCart
            style={{
              width: "30px",
              height: "30px",
              color: "white",
            }}
          />
          <span className="cart_counter">{cartTotalAmount}</span>
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;
