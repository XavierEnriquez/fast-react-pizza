import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { formatCurrency } from "../../utils/helpers";
import { getCartQuantity, getCartTotal } from "./cartSlice";
import Button from "../../ui/Button";

function CartOverview() {
  const page = useLocation().pathname;

  const cartQuantity = useSelector(getCartQuantity);
  const cartTotal = useSelector(getCartTotal);

  if (!cartQuantity || page === "/cart") return null;

  return (
    <div className="flex flex-wrap items-center justify-between gap-4 bg-stone-800 px-8 py-4 uppercase text-stone-200">
      <p className="space-x-4 text-nowrap font-semibold text-stone-300">
        <span>{cartQuantity} pizzas</span>
        <span> {formatCurrency(cartTotal)}</span>
      </p>
      <Button type="link" to="/cart" className="link_cart">
        Go to cart &rarr;
      </Button>
    </div>
  );
}

export default CartOverview;
