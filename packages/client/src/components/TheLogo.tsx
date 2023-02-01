import { Link } from "react-router-dom";
import Icon from "./Icon";

export default function TheLogo() {
  return (
    <figure className="logo">
      <Link to="/">
        <Icon name="Logo_ML" alt="MercadoLibre Logo" />
      </Link>
    </figure>
  );
}
