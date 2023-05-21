import { FaPlus, FaMinus } from "react-icons/fa";

import { useAppDispatch, useAppSelector } from "../../store/hooks";
import "./style.css";

const CartLayout = () => {
  const dispatch = useAppDispatch();
  const { cartProducts } = useAppSelector((state) => state.cart);

  if (cartProducts.length === 0)
    return (
      <div className="cart_container">
        <h1
          style={{
            textAlign: "center",
            margin: "20px 0",
            fontSize: "3rem",
            color: "var(--mainColor)",
          }}
        >
          Cart is empty
        </h1>
      </div>
    );

  return (
    <div className="cart_container">
      {cartProducts.map((product) => (
        <div className="cart_item" title={product.title} key={product.id}>
          <div className="cart_item_img">
            <img src={product.image} alt={product.title} />
          </div>
          <div className="cart_item_details">
            <div className="cart_item_info">
              <h3 className="cart_item_name">
                {product.title.length > 20
                  ? product.title.slice(0, 20) + "..."
                  : product.title}
              </h3>
              <h6 className="cart_item_category">{product.category}</h6>
            </div>
            <div className="cart_item_amount">
              <div className="plus_btn">
                <FaPlus
                  style={{
                    width: "15px",
                    height: "15px",
                  }}
                />
              </div>
              <h5 className="cart_item_quantity">{product.amount ?? 0}</h5>
              <div className="minus_btn">
                <FaMinus
                  style={{
                    width: "15px",
                    height: "15px",
                  }}
                />
              </div>
            </div>
            <div className="cart_item_price">
              <h5>$ {product.price}</h5>
              <button>Remove</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartLayout;
