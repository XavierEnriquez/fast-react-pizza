import { useSelector } from "react-redux";

import { formatCurrency } from "../../utils/helpers";
import { getCartQuantity, getCartTotal } from "./cartSlice";
import Button from "../../ui/Button";

function CartOverview() {
  const cartQuantity = useSelector(getCartQuantity);
  const cartTotal = useSelector(getCartTotal);

  if (!cartQuantity) return null;

  return (
    <div className="flex flex-wrap items-center justify-between gap-4 bg-stone-800 px-8 py-4 uppercase text-stone-200">
      <p className="space-x-4 text-nowrap font-semibold text-stone-300">
        <span>{cartQuantity} pizzas</span>
        <span> {formatCurrency(cartTotal)}</span>
      </p>
      <Button type="link" to="/cart" className="link_cart">
        Place your order &rarr;
      </Button>
    </div>
  );
}

export default CartOverview;
