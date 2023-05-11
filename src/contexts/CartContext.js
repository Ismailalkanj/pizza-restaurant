import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const useCart = () => useContext(AuthContext);
const API_URL = "http://localhost:8000/api/";

const CartStateContext = ({ children }) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const [cart, setCart] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    if(cart === null)
        updateCartData();
  }, []);

  const getCartData = async () => {
    const { data } = await axios.get(`${API_URL}cart/all`);

    return data;
  };

  const updateCartData = async () => {
    const { data } = await axios.get(`${API_URL}cart/all`);
    console.log(data);
    setCart(data);
  };

  const removeFromCart = async (product_id) => {
    const { data } = axios.get(`${API_URL}cart/removeProduct/${product_id}`);
    setCart(data);
  };

  const addToCart = async (product_id) => {
    const { data } = await axios.post(`${API_URL}cart/addProduct`, {
      product_id: product_id,
      quantity: 1,
    });
    setCart(data);
  };

  const getItemCount = () => {
    if (!cart) return 0;

    return cart.reduce((accumulator, value) => {
      return accumulator + value.quantity;
    }, 0);
  };

  const getCartTotal = () => {
    if (!cart) return 0;

    return cart.reduce((accumulator, cartItem) => {
      return accumulator + parseFloat(cartItem.price) * cartItem.quantity;
    }, 0);
  };

  const hideCart = () => {
    setIsCartOpen(false);
  }

  const showCart = () => {
    setIsCartOpen(true);
  }


  return (
    <CartContext.Provider
      value={{
        getCartData,
        updateCartData,
        cart,
        removeFromCart,
        addToCart,
        getItemCount,
        getCartTotal,
        isCartOpen,
        showCart,
        hideCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartStateContext;
