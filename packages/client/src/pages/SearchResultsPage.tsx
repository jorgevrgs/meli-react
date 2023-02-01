import { useLocation, useNavigate } from "react-router-dom";
import AsyncView from "../components/AsyncView";
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

  return (
    <AsyncView error={error && String(error)} isFetching={isFetching}>
      {data && <ItemsList items={data.items} />}
    </AsyncView>
  );
}
