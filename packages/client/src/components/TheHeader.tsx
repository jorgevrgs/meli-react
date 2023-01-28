import SearchBox from "../features/search-box/SearchBox";
import "./TheHeader.scss";

export default function TheHeader() {
  return (
    <header className="header">
      <div className="header__section">
        <figure className="logo">
          <img
            srcSet="/images/Logo_ML.png, /images/Logo_ML@2x.png 2x"
            src="/images/Logo_ML.png"
            alt="MercadoLibre Logo"
          />
        </figure>
        <SearchBox />
      </div>
    </header>
  );
}
