import CartLayout from "../components/CartLayout";
import Layout from "../components/global/Layout";

const Cart = () => {
  return (
    <Layout pagetitle="Cart">
      <div
        style={{
          minHeight: "calc(100vh - 160px)",
        }}
      >
        <CartLayout />
      </div>
    </Layout>
  );
};

export default Cart;
