import { useDispatch, useSelector } from "react-redux";

import { getUsername } from "../user/userSlice";
import { clearCart, getCart } from "./cartSlice";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";

function Cart() {
  const cart = useSelector(getCart);

  const username = useSelector(getUsername);

  const dispatch = useDispatch();

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="mx-auto flex max-w-2xl flex-col justify-center gap-8">
      <div>
        <Button type="link" to="/menu" className="link">
          &larr; Back to menu
        </Button>
      </div>

      <h2 className="mt-6 text-xl font-semibold">{username}&apos;s cart</h2>

      <ul className="divide-y divide-stone-300 border-y">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className="flex flex-row items-center gap-4">
        <Button type="link" to="/order/new" className="primary">
          Order pizzas
        </Button>
        <Button onClick={() => dispatch(clearCart())} className="secondary">
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
