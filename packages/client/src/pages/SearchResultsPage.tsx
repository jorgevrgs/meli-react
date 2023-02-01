import { useLocation, useNavigate } from "react-router-dom";
import ItemsList from "../features/items/ItemsList";
import { useGetItemsQuery } from "../features/items/services/items.service";

export default function SearchResultsPage() {
  const location = useLocation();
  const search = new URLSearchParams(location.search).get("search");
  const navigate = useNavigate();

  if (!search) {
    navigate("/");
    return null;
  }

  const { data, error, isFetching } = useGetItemsQuery(search);

  if (error) {
    return <div>Error: {String(error)}</div>;
  }

  if (isFetching) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return null;
  }

  return <ItemsList items={data.items} />;
}
