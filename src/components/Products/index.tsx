import { useNavigate } from "react-router-dom";

import "./style.css";
import { Product } from "../../store/featurs/products/productsSlice";
import { useAppDispatch } from "../../store/hooks";
import { addProductToCart } from "../../store/featurs/cart/cartSlice";

type Props = {
  products: Product[];
};

const Products = (props: Props) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  return (
    <div className="products_container">
      {props.products.map((product) => (
        <div className="product_card" key={product.id} title={product.title}>
          <div className="product_img">
            <img src={product.image} alt={product.title} />
          </div>
          <div className="product_info">
            <h3 title={product.title}>
              {product.title.length > 20
                ? product.title.slice(0, 20) + "..."
                : product.title}
            </h3>

            <p className="product_price">{product.price} $</p>
          </div>
          <div className="product_buttons">
            <button
              className="btn btn-outline-primary"
              onClick={() => {
                dispatch(addProductToCart(product.id));
                // navigate("/cart");
              }}
            >
              Add to cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
