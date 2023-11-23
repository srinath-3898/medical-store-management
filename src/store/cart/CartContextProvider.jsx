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
            return {
              ...item,
              quantity: item.quantity + 1,
              remainingQuantity: item?.remainingQuantity - 1,
            };
          } else {
            return item;
          }
        });
      });
    } else {
      setItems((prevState) => [
        ...prevState,
        { ...item, remainingQuantity: item?.quantity - 1, quantity: 1 },
      ]);
    }
  };

  const removeItem = (item) => {
    if (item.quantity === 1) {
      setItems((prevState) => prevState.filter((i) => i.id !== item?.id));
    } else {
      setItems((prevState) =>
        prevState.map((i) => {
          if (i.id === item.id) {
            return {
              ...i,
              quantity: i.quantity - 1,
              remainingQuantity: i.remainingQuantity + 1,
            };
          } else {
            return i;
          }
        })
      );
    }
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
