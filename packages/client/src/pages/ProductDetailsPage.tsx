import { useParams } from "react-router-dom";
import AsyncView from "../components/AsyncView";
import Item from "../features/items/Item";
import { useGetItemQuery } from "../features/items/services/items.service";

export default function ProductDetailsPage() {
  const { id } = useParams();

  if (!id) {
    // TODO: Redirect to not found page
    return null;
  }

  const { data, error, isFetching } = useGetItemQuery(id);

  return (
    <AsyncView error={error && String(error)} isFetching={isFetching}>
      {data && <Item {...data.item} />}
    </AsyncView>
  );
}
