import { Outlet } from "react-router-dom";
import { useAppSelector } from "../hooks/store.hook";
import Breadcrumb from "./Breadcrumb";
import styles from "./TheBody.module.scss";

export default function TheBody() {
  const { categories } = useAppSelector((state) => state.items);

  return (
    <main className={styles.body}>
      <div className={styles.body__container}>
        <Breadcrumb pathToRoot={categories} />

        <div className={styles.body__container__main}>
          <Outlet />
        </div>
      </div>
    </main>
  );
}
