import { ItemsResult } from "../../../types";
import Price from "./Price";

export default function ListItem({
  title,
  picture,
  price,
  free_shipping,
}: ItemsResult["items"][number]) {
  return (
    <section>
      <img src={picture} alt={title} width="180" height="180" />
      <div>
        <div>
          <Price {...price} />
          {free_shipping && (
            <figure>
              <img
                srcSet="/images/ic_shipping.png, /images/ic_shipping@2x.png 2x"
                src="/images/ic_shipping.png"
                alt="Envío gratis"
              />
            </figure>
          )}
        </div>
        <h4>{title}</h4>
      </div>
    </section>
  );
}
