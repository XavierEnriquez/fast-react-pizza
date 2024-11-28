import { formatCurrency } from "../../utils/helpers";
import DeleteItem from "./DeleteItem";
import IncreaseDecrease from "./IncreaseDecrease";

function CartItem({ item }) {
  const { pizzaId, name, totalPrice } = item;

  return (
    <li className="flex min-w-60 items-center justify-between gap-8 py-2">
      <div className="flex flex-grow flex-wrap justify-between">
        <p className="mb-1 min-w-60 font-medium">{name}</p>
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
      </div>
      <div className="flex flex-wrap justify-between gap-4">
        <IncreaseDecrease itemId={pizzaId} />
        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
