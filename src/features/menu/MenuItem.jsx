import { formatCurrency } from "../../utils/helpers";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { addItem } from "../cart/cartSlice";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch();

  function handleAddToCart() {
    const newItem = {
      pizzaId: id,
      name: name,
      quantity: 1,
      unitPrice: unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
  }

  return (
    <li className="max-w-2/5 flex flex-grow gap-4 py-2 md:w-2/5 xl:w-1/4 xl:py-4">
      <img
        src={imageUrl}
        alt={name}
        className={`min-w-36 max-w-[30%] ${soldOut ? "opacity-70 grayscale" : ""}`}
      />
      <div className="flex grow flex-col gap-4">
        <div>
          <p className="font-medium">{name}</p>
          <p className="text-sm capitalize italic text-stone-500">
            {ingredients.join(", ")}
          </p>
        </div>
        <div className="mt-auto flex flex-wrap items-center justify-between gap-4">
          <div className="w-24">
            {!soldOut ? (
              <p className="text-sm">{formatCurrency(unitPrice)}</p>
            ) : (
              <p className="text-sm font-medium uppercase text-stone-500">
                Sold out
              </p>
            )}
          </div>
          {!soldOut && (
            <Button onClick={handleAddToCart} className="small">
              Add to cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
