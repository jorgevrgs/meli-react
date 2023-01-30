import { useLocation, useNavigate } from "react-router-dom";
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
    <>
      {isFetching && <div>Loading...</div>}
      {error && <div>Error: {String(error)}</div>}
      {data && (
        <div>
          Results for {search}:{" "}
          {data.items.map((item) => (
            <div key={item.id}>{item.title}</div>
          ))}
        </div>
      )}
    </>
  );
}
