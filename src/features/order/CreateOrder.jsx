// import { useState } from "react";
import { Form, useActionData, useNavigation } from "react-router-dom";
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
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const formErrors = useActionData();

  // const [withPriority, setWithPriority] = useState(false);
  const cart = fakeCart;

  return (
    <div className="m-auto flex max-w-96 flex-col gap-6">
      <h2 className="text-lg">Ready to order? Let&apos;s go!</h2>

      <Form method="POST" className="flex flex-col gap-4">
        <div>
          <label>First Name</label>
          <div>
            <Input type="text" name="customer" required={true} />
          </div>
        </div>

        <div>
          <label>Phone number</label>
          <div>
            <Input type="tel" name="phone" required={true} />
          </div>
          {formErrors?.phone && <p>{formErrors.phone}</p>}
        </div>

        <div>
          <label>Address</label>
          <div>
            <Input type="text" name="address" required={true} />
          </div>
        </div>

        <div className="flex gap-2 align-middle">
          <input
            className="h-6 w-6"
            type="checkbox"
            name="priority"
            id="priority"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
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
