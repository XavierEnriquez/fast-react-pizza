// import { useState } from "react";
import { Form, useActionData, useNavigation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import { formatCurrency } from "../../utils/helpers";
import { fetchAddress } from "../user/userSlice";
import { getCart, getCartTotal } from "../cart/cartSlice";
import Button from "../../ui/Button";
import Input from "../../ui/input";
import EmptyCart from "../cart/EmptyCart";

function CreateOrder() {
  const dispatch = useDispatch();
  const formErrors = useActionData();

  const [withPriority, setWithPriority] = useState(false);

  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const {
    username,
    status: addressStatus,
    position,
    address,
  } = useSelector((state) => state.user);

  const isLoadingAddress = addressStatus === "loading";

  const cart = useSelector(getCart);
  const subTotal = useSelector(getCartTotal);
  const priorityFee = withPriority ? subTotal * 0.2 : 0;
  const orderTotal = subTotal + priorityFee;

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="m-auto mt-[5vmin] flex max-w-xl flex-col gap-8">
      <div>
        <Button type="link" to="/cart" className="link">
          &larr; Modify your order
        </Button>
      </div>
      <h2 className="text-2xl font-semibold">
        To complete your order, fill out the form and click the button below!
      </h2>

      <Form method="POST" className="flex flex-col gap-6">
        <div className="flex flex-wrap gap-2 sm:flex-row sm:flex-nowrap sm:items-center">
          <label htmlFor="customer" className="sm:basis-36">
            Name
          </label>
          <Input
            className="input"
            type="text"
            name="customer"
            id="customer"
            defaultValue={username}
            required={true}
          />
        </div>

        <div className="flex flex-col">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <label htmlFor="phone" className="sm:basis-36">
              Phone number
            </label>
            <Input
              className="input"
              type="tel"
              id="phone"
              name="phone"
              required={true}
            />
          </div>
          <div className="justify-items-center sm:justify-items-end">
            {formErrors?.phone && (
              <p className="error_message mt-2">{formErrors.phone}</p>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-end gap-4 text-sm">
            {!position.latitde && !position.longitude ? (
              <>
                <p className="italic">
                  Share your location or type address below
                </p>
                <Button
                  className="small"
                  disabled={isLoadingAddress}
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(fetchAddress());
                  }}
                >
                  {isLoadingAddress ? "Loading..." : " Share location"}
                </Button>
              </>
            ) : (
              <p className="italic">Make sure the address below is correct</p>
            )}
          </div>

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <label htmlFor="address" className="sm:basis-36">
              Address
            </label>
            <Input
              className="input"
              type="text"
              name="address"
              id="address"
              defaultValue={address}
              required={true}
              disabled={isLoadingAddress}
            />
          </div>
        </div>
        <div className="mt-4 flex gap-4 align-middle">
          <Input
            className="checkbox"
            type="checkbox"
            name="priority"
            id="order_priority"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="order_priority" className="font-medium">
            Make my order priority!
          </label>
        </div>

        <div className="flex flex-wrap-reverse items-start justify-between gap-8 pt-4">
          <Button
            className="primary"
            disabled={isSubmitting || isLoadingAddress}
          >
            {isSubmitting ? "Placing order..." : "Place order now"}
          </Button>
          <div className="flex flex-col gap-2 rounded-lg border border-stone-300 bg-stone-200 px-8 py-4 text-right text-lg text-stone-700">
            <p>
              Sub-total:{" "}
              <span className="font-semibold"> {formatCurrency(subTotal)}</span>
            </p>
            <p>
              Total:{" "}
              <span className="font-bold"> {formatCurrency(orderTotal)}</span>
            </p>
          </div>
        </div>
        <input type="hidden" name="cart" value={JSON.stringify(cart)} />
      </Form>
    </div>
  );
}

export default CreateOrder;
