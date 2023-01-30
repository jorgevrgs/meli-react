import { Link } from "react-router-dom";

export default function TheLogo() {
  return (
    <figure className="logo">
      <Link to="/">
        <img
          srcSet="/images/Logo_ML.png, /images/Logo_ML@2x.png 2x"
          src="/images/Logo_ML.png"
          alt="MercadoLibre Logo"
        />
      </Link>
    </figure>
  );
}
