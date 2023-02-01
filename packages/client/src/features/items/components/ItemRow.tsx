import { Link } from "react-router-dom";
import Icon from "../../../components/Icon";
import { ItemsResult } from "../../../types";
import Price from "./Price";

export default function ItemRow({
  id,
  title,
  picture,
  price,
  free_shipping,
}: ItemsResult["items"][number]) {
  return (
    <Link to={`/items/${id}`}>
      <section>
        <img src={picture} alt={title} width="180" height="180" />
        <div>
          <div>
            <Price {...price} />
            {free_shipping && (
              <figure>
                <Icon name="ic_shipping" alt="Envío gratis" />
              </figure>
            )}
          </div>
          <h4>{title}</h4>
        </div>
      </section>
    </Link>
  );
}
