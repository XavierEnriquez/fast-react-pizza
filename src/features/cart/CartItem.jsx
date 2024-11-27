import { formatCurrency } from "../../utils/helpers";
import DeleteItem from "./DeleteItem";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="flex min-w-60 items-center justify-between gap-8 py-2">
      <div className="flex flex-grow flex-wrap justify-between">
        <p className="mb-1 min-w-60 font-medium">
          {quantity}&times; {name}
        </p>
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
      </div>
      <DeleteItem pizzaId={pizzaId} />
    </li>
  );
}

export default CartItem;
