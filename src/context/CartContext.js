import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();
const CartUpdateContext = createContext();

export const useCart = () => useContext(CartContext);
export const useUpdateCart = () => useContext(CartUpdateContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({ count: 0, data: [], total: 0 });

  const updateCart = (cartItem, type) => {
    console.log(cartItem, type);
    if (type === "add") {
      // add
      setCart((prev) => {
        return {
          ...prev,
          count: prev.count + cartItem.quantity,
          data: [...prev.data, cartItem],
          total: prev.total + cartItem.quantity * cartItem.price,
        };
      });
    } else if (type === "update") {
      // update the item
      const item = cart.data.find((temp) => temp.id === cartItem.id);
      setCart((prev) => {
        return {
          ...prev,
          count: prev.count - item.quantity + cartItem.quantity,
          data: prev.data.map((temp) =>
            temp.id === cartItem.id ? cartItem : temp
          ),
          total:
            prev.total + (cartItem.quantity - item.quantity) * cartItem.price,
        };
      });
    } else if (type === "delete") {
      // delete
      const item = cart.data.find((temp) => temp.id === cartItem.id);
      setCart((prev) => {
        return {
          ...prev,
          count: prev.count - item.quantity,
          data: prev.data.filter((temp) => temp.id !== cartItem.id),
          total: prev.total - item.quantity * cartItem.price,
        };
      });
    }
  };
  return (
    <CartContext.Provider value={cart}>
      <CartUpdateContext.Provider value={updateCart}>
        {children}
      </CartUpdateContext.Provider>
    </CartContext.Provider>
  );
};
