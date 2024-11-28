import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import {
  decreaseItemQuantity,
  getQuantityById,
  increaseItemQuantity,
} from "./cartSlice";

function IncreaseDecrease({ itemId }) {
  const dispatch = useDispatch();

  const itemQuantity = useSelector(getQuantityById(itemId));

  return (
    <div className="flex items-center gap-2 text-lg font-semibold text-stone-500">
      <Button
        onClick={() => dispatch(increaseItemQuantity(itemId))}
        className="round"
      >
        ➕
      </Button>
      <span className="">{itemQuantity}</span>
      <Button
        onClick={() => dispatch(decreaseItemQuantity(itemId))}
        className="round"
      >
        ➖
      </Button>
    </div>
  );
}

export default IncreaseDecrease;
