import { Outlet } from "react-router-dom";
import styles from "./TheBody.module.scss";

export default function TheBody() {
  return (
    <main className={styles.body}>
      <div className={styles.body__container}>
        <Outlet />
      </div>
    </main>
  );
}
