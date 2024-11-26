import { useSelector } from "react-redux";
import Button from "../../ui/Button";
import CartItem from "./CartItem";

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function Cart() {
  const cart = fakeCart;
  const username = useSelector((state) => state.user.username);

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
        <Button className="secondary">Clear cart</Button>
      </div>
    </div>
  );
}

export default Cart;
