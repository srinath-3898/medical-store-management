"use client";
import React, { useContext, useState } from "react";
import styles from "./MedicineForm.module.css";
import { MedicineContext } from "@/store/medicine/MedicineContext";

const MedicineForm = () => {
  const { addMedicine } = useContext(MedicineContext);
  const [medicine, setMedicine] = useState({
    name: "",
    price: "",
    description: "",
    quantity: "",
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setMedicine((prevState) => ({ ...prevState, [name]: value }));
  };
  return (
    <form
      className={styles.medicine_form}
      onSubmit={(event) => {
        event.preventDefault();
        addMedicine(medicine);
      }}
    >
      <div className={styles.input_controller}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          placeholder="Medicine name"
          name="name"
          value={medicine.name}
          onChange={handleInputChange}
        />
      </div>
      <div className={styles.input_controller}>
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          placeholder="Price of the medicine"
          name="price"
          value={medicine.price}
          onChange={handleInputChange}
        />
      </div>
      <div className={styles.input_controller}>
        <label htmlFor="quantity">Quantity:</label>
        <input
          type="number"
          id="quantity"
          placeholder="Quantity of the medicine"
          name="quantity"
          value={medicine.quantity}
          onChange={handleInputChange}
        />
      </div>
      <div className={`${styles.input_controller} ${styles.description}`}>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          placeholder="Description of the medicine"
          name="description"
          value={medicine.description}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit">Add Medicine</button>
    </form>
  );
};

export default MedicineForm;
