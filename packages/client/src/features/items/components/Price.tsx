import type { ItemResult } from "../../../types";
import styles from "./Price.module.scss";

export default function Price({
  amount,
  currency,
  decimal,
}: ItemResult["item"]["price"]) {
  const decimals = ((amount % 1) * 10 ** decimal)
    .toFixed(0)
    .padStart(decimal, "0");
  const locale = `es-${currency.slice(0, 2)}`;

  return (
    <div className={styles.price}>
      <span>
        {amount.toLocaleString(locale, {
          style: "currency",
          currency,
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        })}
      </span>

      {decimal > 0 && (
        <span className={styles.price__fraction}>{decimals}</span>
      )}
    </div>
  );
}
