import { Link, useLocation, useNavigate } from "react-router-dom";
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
      {/* FIXME: Add listing components */}
      {isFetching && <div>Loading...</div>}
      {error && <div>Error: {String(error)}</div>}
      {data && (
        <div>
          Results for {search}:{" "}
          {data.items.map((item) => (
            <Link key={item.id} to={`/items/${item.id}`}>
              <div key={item.id}>{item.title}</div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
