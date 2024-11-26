import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="py-4 flex justify-between min-w-60 gap-8 items-center">
      <div className="flex justify-between flex-grow flex-wrap  " >
      <p className="mb-1 min-w-60">
        {quantity}&times; {name}
      </p>
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
      </div>
        <Button className='small'>Delete</Button>
    </li>
  );
}

export default CartItem;
