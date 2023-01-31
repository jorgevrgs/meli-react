import ReactMarkdown from "react-markdown";
import type { ItemResult } from "../../types";
import Price from "./components/Price";
import styles from "./Item.module.scss";

export default function Item({
  title,
  picture,
  price,
  description,
  condition,
  sold_quantity,
}: ItemResult["item"]) {
  const conditionDefinition = {
    new: "Nuevo",
    used: "Usado",
    not_specified: "No especificado",
  };

  return (
    <article className={styles.item}>
      <div className={styles.details}>
        <img src={picture} alt={title} className={styles.details__image} />
        <div className={styles.details__content}>
          <div className={styles.details__condition}>
            <span>{conditionDefinition[condition]}</span> -{" "}
            <span>{sold_quantity} vendidos</span>
          </div>
          <h2 className={styles.details__title}>{title}</h2>
          <Price {...price} />

          <button type="button" className={styles.details__button}>
            Comprar
          </button>
        </div>
      </div>

      <section className={styles.description}>
        <h3 className={styles.description__title}>Descripción del producto</h3>
        <div className={styles.description__text}>
          <ReactMarkdown>{description}</ReactMarkdown>
        </div>
      </section>
    </article>
  );
}
