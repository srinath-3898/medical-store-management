"use client";
import { createContext } from "react";

export const MedicineContext = createContext({
  medicines: [],
  addMedicine: (medicine) => {},
  removeMedicine: (medicine) => {},
});
