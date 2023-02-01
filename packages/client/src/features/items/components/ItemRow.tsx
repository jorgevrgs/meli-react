import { Link } from "react-router-dom";
import Icon from "../../../components/Icon";
import { ItemsResult } from "../../../types";
import styles from "./ItemRow.module.scss";
import Picture from "./Picture";
import Price from "./Price";

export default function ItemRow({
  id,
  title,
  picture,
  price,
  free_shipping,
}: ItemsResult["items"][number]) {
  return (
    <section className={styles.item}>
      <Picture src={picture} alt={title} width="180" height="180" />
      <div className={styles.item__content}>
        <div className={styles.item__price}>
          <Price {...price} />
          {free_shipping && (
            <figure>
              <Icon name="ic_shipping" alt="Envío gratis" />
            </figure>
          )}
        </div>
        <Link to={`/items/${id}`}>
          <h4>{title}</h4>
        </Link>
      </div>
    </section>
  );
}
