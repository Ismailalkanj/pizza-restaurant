import { CartContext } from "@/contexts/CartContext";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useContext } from "react";

const Cart = () => {
  const { cart, removeFromCart, getCartTotal } = useContext(CartContext);

  console.log(cart);

  return (
    <div className="fixed right-10 z-40 top-[7rem] bg-white border border-red-600">
      <h3>Cart </h3>

      <ul>
        {cart &&
          cart.map((cartItem) => (
            <li>
              {cartItem.quantity}{" "}-{" "}
              {cartItem.name} -  {cartItem.price}{" "}
              <button onClick={() => removeFromCart(cartItem.product_id)}>
                Remove
              </button>
            </li>
          ))}

          <li>Total: {getCartTotal()}</li>
      </ul>
    </div>
  );
};

export default Cart;
