import { useEffect } from "react";

import Layout from "../components/global/Layout";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchProducts } from "../store/featurs/products/productsThunk";
import Products from "../components/Products";

type Props = {};

const Home = (props: Props) => {
  const dispatch = useAppDispatch();
  const fetchedProducts = useAppSelector((state) => state.products.products);
  console.log(fetchedProducts);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <Layout>
      <div
        style={{
          minHeight: "calc(100vh - 160px)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            margin: "20px 0",
            fontSize: "3rem",
            color: "var(--mainColor)",
          }}
        >
          All Products
        </h1>
        <Products products={fetchedProducts} />
      </div>
    </Layout>
  );
};

export default Home;
