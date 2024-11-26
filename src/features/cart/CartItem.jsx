import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="flex min-w-60 items-center justify-between gap-8 py-4">
      <div className="flex flex-grow flex-wrap justify-between">
        <p className="mb-1 min-w-60">
          {quantity}&times; {name}
        </p>
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
      </div>
      <Button className="small">Delete</Button>
    </li>
  );
}

export default CartItem;
