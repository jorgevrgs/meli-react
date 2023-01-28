import SearchButton from "./components/SearchButton";
import SearchBoxInput from "./components/SearchInput";
import "./SearchBox.scss";

export default function SearchBox() {
  return (
    <div className="search-box">
      <SearchBoxInput />
      <SearchButton />
    </div>
  );
}
