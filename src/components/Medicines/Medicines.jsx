"use client";
import { MedicineContext } from "@/store/medicine/MedicineContext";
import React, { useContext } from "react";
import styles from "./Medicines.module.css";
import { CartContext } from "@/store/cart/CartContext";

const Medicines = () => {
  const { medicines, removeMedicine } = useContext(MedicineContext);
  const { addItem } = useContext(CartContext);
  return (
    <div className={styles.medicines_table}>
      <p>Medicines</p>
      <div className={styles.table_header}>
        <p>Name</p>
        <p>Description</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Actions</p>
      </div>
      {medicines?.map((medicine) => (
        <div key={medicine?.id} className={styles.medicine}>
          <p>{medicine?.name}</p>
          <p>{medicine?.description}</p>
          <p>{medicine?.price}</p>
          <p>{medicine?.quantity}</p>
          <button
            onClick={() => {
              addItem(medicine);
              removeMedicine(medicine);
            }}
            disabled={medicine?.quantity === 0}
          >
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Medicines;
