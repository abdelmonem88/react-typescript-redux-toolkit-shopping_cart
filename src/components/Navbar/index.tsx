import { FaShoppingCart } from "react-icons/fa";

import "./style.css";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav>
      <div className="logo">
        <h1>Shoping Cart</h1>
      </div>
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
    </nav>
  );
};

export default Navbar;