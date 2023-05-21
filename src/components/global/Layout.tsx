import Footer from "../Footer";
import Navbar from "../Navbar";

type Props = {
  pagetitle?: string;
  children: React.ReactNode;
};

const Layout = (props: Props) => {
  const { pagetitle } = props;
  return (
    <main>
      <Navbar />
      <h1
        style={{
          textAlign: "center",
          margin: "20px 0",
          fontSize: "4rem",
        }}
      >
        {pagetitle}
      </h1>
      {props.children}
      <Footer />
    </main>
  );
};

export default Layout;
