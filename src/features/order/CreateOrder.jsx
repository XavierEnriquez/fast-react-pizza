// import { useState } from "react";
import { Form, useActionData, useNavigation } from "react-router-dom";
import { useSelector } from "react-redux";

import Button from "../../ui/Button";
import Input from "../../ui/input";

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

function CreateOrder() {
  const username = useSelector((state) => state.user.username);
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const formErrors = useActionData();

  // const [withPriority, setWithPriority] = useState(false);
  const cart = fakeCart;

  return (
    <div className="m-auto mt-[5vmin] flex max-w-xl flex-col gap-8">
      <h2 className="text-2xl font-semibold">Ready to order? Let&apos;s go!</h2>

      <Form method="POST" className="flex flex-col gap-6">
        <div className="flex flex-wrap gap-2 sm:flex-row sm:flex-nowrap sm:items-center">
          <label className="sm:basis-36">Name</label>
          <Input
            type="text"
            name="customer"
            defaultValue={username}
            required={true}
          />
        </div>

        <div className="flex flex-col">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <label className="sm:basis-36">Phone number</label>
            <Input type="tel" name="phone" required={true} />
          </div>
          <div className="justify-items-center sm:justify-items-end">
            {formErrors?.phone && (
              <p className="error_message mt-2">{formErrors.phone}</p>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-36">Address</label>
          <Input type="text" name="address" required={true} />
        </div>

        <div className="mt-4 flex gap-4 align-middle">
          <input
            className="h-6 w-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2"
            type="checkbox"
            name="priority"
            id="priority"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority" className="font-medium">
            Want to yo give your order priority?
          </label>
        </div>
        <div className="flex justify-end pt-2">
          <Button className="primary" disabled={isSubmitting}>
            {isSubmitting ? "Placing order..." : "Order now"}
          </Button>
        </div>
        <input type="hidden" name="cart" value={JSON.stringify(cart)} />
      </Form>
    </div>
  );
}

export default CreateOrder;
