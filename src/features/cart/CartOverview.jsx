import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div className="flex flex-wrap justify-between gap-4 bg-stone-800 px-8 py-4 uppercase text-stone-200">
      <p className="space-x-4 text-nowrap font-semibold text-stone-300">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to="/cart" className="text-nowrap">
        Open cart &rarr;
      </Link>
    </div>
  );
}

export default CartOverview;
