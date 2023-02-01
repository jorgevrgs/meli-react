import { ItemsResult } from "../../types";
import ItemRow from "./components/ItemRow";
import styles from "./ItemsList.module.scss";

export default function ItemsList({ items }: { items: ItemsResult["items"] }) {
  return (
    <div className={styles.items}>
      {items.map((item) => (
        <ItemRow key={item.id} {...item} />
      ))}
    </div>
  );
}
