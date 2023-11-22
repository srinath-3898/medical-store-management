"use client";
import React, { useState } from "react";
import { MedicineContext } from "./MedicineContext";

const DUMMY_MEDICINES = [
  {
    id: 1,
    name: "Paracetamol",
    description: "Used to treat fever",
    price: 10,
    quantity: 10,
  },
  {
    id: 2,
    name: "Dolo",
    description: "Used to treat fever",
    price: 5,
    quantity: 50,
  },
  {
    id: 3,
    name: "Citirizine",
    description: "Used to treat cold",
    price: 15,
    quantity: 0,
  },
];

const MedicineContextProvider = ({ children }) => {
  const [medicines, setMedicines] = useState(DUMMY_MEDICINES);

  const addMedicine = (medicine) => {
    const alreadyPresentMedicineIndex = medicines?.findIndex(
      (m) => m?.id === medicine?.id
    );
    if (alreadyPresentMedicineIndex !== -1) {
      setMedicines((prevState) =>
        prevState?.map((m, i) => {
          if (i === alreadyPresentMedicineIndex) {
            return { ...m, quantity: m.quantity + 1 };
          } else {
            return m;
          }
        })
      );
    } else {
      setMedicines((prevState) => [
        ...prevState,
        { ...medicine, quantity: medicine.quantity, id: prevState.length + 1 },
      ]);
    }
  };

  const removeMedicine = (medicine) => {
    const alreadyPresentMedicineIndex = medicines?.findIndex(
      (m) => m?.id === medicine?.id
    );
    const alreadyPresentMedicine = medicines[alreadyPresentMedicineIndex];

    if (alreadyPresentMedicine?.quantity !== 0) {
      setMedicines((prevState) =>
        prevState.map((m) => {
          if (m.id === medicine?.id) {
            return { ...m, quantity: m.quantity - 1 };
          } else {
            return m;
          }
        })
      );
    }
  };

  return (
    <MedicineContext.Provider
      value={{
        medicines: medicines,
        addMedicine: addMedicine,
        removeMedicine: removeMedicine,
      }}
    >
      {children}
    </MedicineContext.Provider>
  );
};

export default MedicineContextProvider;
