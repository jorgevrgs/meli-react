import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AsyncView from "../components/AsyncView";
import ItemsList from "../features/items/ItemsList";
import { useGetItemsQuery } from "../features/items/services/items.service";
import { setSearch } from "../features/search-box/slices/search.slice";
import { useAppDispatch } from "../hooks/store.hook";

export default function SearchResultsPage() {
  const location = useLocation();
  const search = new URLSearchParams(location.search).get("search");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!search) {
      navigate("/");
    } else {
      console.log("search", search);
      dispatch(setSearch(search));
    }
  }, [search]);

  if (!search) {
    return null;
  }

  const { data, error, isFetching } = useGetItemsQuery(search);

  return (
    <AsyncView error={error} isFetching={isFetching}>
      {data && <ItemsList items={data.items} categories={data.categories} />}
    </AsyncView>
  );
}
