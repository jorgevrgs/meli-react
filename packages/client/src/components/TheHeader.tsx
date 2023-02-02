import SearchBox from "../features/search-box/SearchBox";
import styles from "./TheHeader.module.scss";
import TheLogo from "./TheLogo";

export default function TheHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.header__section}>
        <TheLogo />
        <SearchBox />
      </div>
    </header>
  );
}
