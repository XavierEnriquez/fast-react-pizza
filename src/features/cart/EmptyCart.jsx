import Button from "../../ui/Button";

function EmptyCart() {
  return (
    <div className="m-auto mt-[5vmin] w-1/2 space-y-4">
      <Button type="link" to="/menu" className="link">
        &larr; Back to menu
      </Button>

      <p className="text-lg font-semibold">
        Your cart is empty! Quickly, go to the menu and choose some pizzas :)
      </p>
    </div>
  );
}

export default EmptyCart;
