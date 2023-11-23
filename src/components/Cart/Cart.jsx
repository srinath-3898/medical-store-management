"use client";
import { CartContext } from "@/store/cart/CartContext";
import React, { useContext } from "react";
import styles from "./Cart.module.css";
import { MedicineContext } from "@/store/medicine/MedicineContext";

const Cart = () => {
  const { items, addItem, removeItem } = useContext(CartContext);
  const { addMedicine, removeMedicine } = useContext(MedicineContext);
  console.log(items);
  return (
    <div className={styles.cart}>
      <p>Cart</p>
      {items.map((item) => (
        <div key={item?.id} className={styles.medicine}>
          <p>{item?.name}</p>
          <p>X {item.quantity}</p>
          <button
            disabled={item.remainingQuantity === 0}
            onClick={() => {
              addItem(item);
              removeMedicine(item);
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              removeItem(item);
              addMedicine(item);
            }}
          >
            -
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
