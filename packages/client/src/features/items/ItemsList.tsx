import { ItemsResult } from "../../types";
import ItemRow from "./components/ItemRow";

export default function ItemsList({ items }: { items: ItemsResult["items"] }) {
  return (
    <div>
      {items.map((item) => (
        <ItemRow key={item.id} {...item} />
      ))}
    </div>
  );
}
