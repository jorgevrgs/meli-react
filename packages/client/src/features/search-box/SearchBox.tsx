import { useNavigate } from "react-router-dom";
import SearchBoxInput from "./components/SearchInput";
import "./SearchBox.scss";

export default function SearchBox() {
  const navigate = useNavigate();

  const handleSearch = (value: string) => {
    if (value) {
      navigate(`/items?search=${value}`);
    }
  };

  return (
    <div className="search-box">
      <SearchBoxInput onSearch={handleSearch} />
    </div>
  );
}
