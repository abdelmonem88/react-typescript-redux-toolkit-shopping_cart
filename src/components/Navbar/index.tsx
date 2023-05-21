import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

import "./style.css";

type Props = {};

const Navbar = (props: Props) => {
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
          <span className="cart_counter">0</span>
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;
