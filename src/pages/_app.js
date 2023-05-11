import "@/styles/globals.css";
import Layout from "../../components/Layout";
import CartStateContext from "@/contexts/CartContext";

function App({ Component, pageProps }) {
  return (
    <CartStateContext>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </CartStateContext>
  );
}
export default App;
