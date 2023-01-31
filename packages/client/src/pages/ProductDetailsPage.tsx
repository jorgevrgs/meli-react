import { useParams } from "react-router-dom";
import Item from "../features/items/Item";
import { useGetItemQuery } from "../features/items/services/items.service";

export default function ProductDetailsPage() {
  const { id } = useParams();

  if (!id) {
    // TODO: Redirect to not found page
    return null;
  }

  const { data, error, isFetching } = useGetItemQuery(id);

  if (error) {
    return <div>Error: {String(error)}</div>;
  }

  if (isFetching) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return null;
  }

  return <Item {...data.item} />;
}
