import MedicineForm from "@/components/MedicineForm/MedicineForm";
import styles from "./page.module.css";
import Medicines from "@/components/Medicines/Medicines";
import Cart from "@/components/Cart/Cart";

export default function Home() {
  return (
    <div className={styles.container}>
      <MedicineForm />
      <Cart />
      <div className={styles.medicines}>
        <Medicines />
      </div>
    </div>
  );
}
