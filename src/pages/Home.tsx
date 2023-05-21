import { useEffect } from "react";

import Layout from "../components/global/Layout";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchProducts } from "../store/featurs/products/productsThunk";
import Products from "../components/Products";

type Props = {};

const Home = (props: Props) => {
  const dispatch = useAppDispatch();
  const { products, loading } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <Layout pagetitle="All Products">
      <div
        style={{
          minHeight: "calc(100vh - 160px)",
        }}
      >
        {loading ? (
          <h1
            style={{
              textAlign: "center",
              margin: "20px 0",
              fontSize: "3rem",
              color: "var(--mainColor)",
            }}
          >
            Loading...
          </h1>
        ) : (
          <>
            <Products products={products} />
          </>
        )}
      </div>
    </Layout>
  );
};

export default Home;
