import Button from "../../ui/Button";

function CartOverview() {
  return (
    <div className="flex flex-wrap justify-between gap-4 bg-stone-800 px-8 py-4 uppercase text-stone-200">
      <p className="space-x-4 text-nowrap font-semibold text-stone-300">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Button type="link" to="/cart" className="link_cart">
        Open cart &rarr;
      </Button>
    </div>
  );
}

export default CartOverview;
