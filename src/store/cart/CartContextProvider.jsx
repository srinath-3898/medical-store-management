"use client";
import React, { useState } from "react";
import { CartContext } from "./CartContext";

const CartContextProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    const alreadyPresentItemIndex = items?.findIndex(
      (cartItem) => cartItem?.id === item?.id
    );
    if (alreadyPresentItemIndex !== -1) {
      setItems((prevState) => {
        return prevState?.map((item, i) => {
          if (i === alreadyPresentItemIndex) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      });
    } else {
      setItems((prevState) => [...prevState, { ...item, quantity: 1 }]);
    }
  };

  const removeItem = (id, quantity) => {
    if (quantity === 1) {
      setItems((prevState) => prevState.filter((item) => item.id !== id));
    }
    setItems((prevState) =>
      prevState.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: quantity - 1 };
        } else {
          return item;
        }
      })
    );
  };

  return (
    <CartContext.Provider
      value={{ items: items, addItem: addItem, removeItem: removeItem }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
