import { useDispatch } from "react-redux";

import { deleteItem } from "./cartSlice";
import Button from "../../ui/Button";

function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();

  return (
    <Button onClick={() => dispatch(deleteItem(pizzaId))} className="small">
      Delete
    </Button>
  );
}

export default DeleteItem;
