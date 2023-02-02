import { useEffect } from "react";
import { useAppDispatch } from "../../hooks/store.hook";
import { ItemsResult } from "../../types";
import ItemRow from "./components/ItemRow";
import styles from "./ItemsList.module.scss";
import { addCategories } from "./slices/items.slice";

export default function ItemsList({
  items,
  categories,
}: {
  items: ItemsResult["items"];
  categories: ItemsResult["categories"];
}) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (categories) {
      dispatch(addCategories(categories));
    }
  }, [categories]);

  return (
    <div className={styles.items} role="list">
      {items.map((item) => (
        <ItemRow key={item.id} {...item} />
      ))}
    </div>
  );
}
