import Footer from "../Footer";
import Navbar from "../Navbar";

type Props = {
  children: React.ReactNode;
};

const Layout = (props: Props) => {
  return (
    <main>
      <Navbar />
      {props.children}
      <Footer />
    </main>
  );
};

export default Layout;
