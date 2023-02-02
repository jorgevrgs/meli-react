import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../hooks/store.hook";
import SearchInput from "./components/SearchInput";
import "./SearchBox.scss";

export default function SearchBox() {
  const navigate = useNavigate();
  const { searchBy } = useAppSelector((state) => state.search);

  const handleSearch = (value: string) => {
    if (value) {
      navigate(`/items?search=${value}`);
    }
  };

  return (
    <div className="search-box">
      <SearchInput onSearch={handleSearch} defaultValue={searchBy} />
    </div>
  );
}
