"use client";
import { createContext } from "react";

export const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (item) => {},
});
