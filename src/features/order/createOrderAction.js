import { redirect } from "react-router-dom";

import { createOrder } from "../../services/apiRestaurant";
import { clearCart } from "../cart/cartSlice";

import store from "../../store";

// Phone number validation --  https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,3}?[-.\s]?\(?\d{1,2}?\)?[-.\s]?\d{1,3}[-.\s]?\d{1,3}[-.\s]?\d{1,5}?[-.\s]?\d{1,6}[-.\s]?\d{1,4}[-.\s]?\d{1,8}[-.\s]?\d{1,9}[-.\s]?\d{1,9}$/.test(
    str,
  );

// "function action" is a Redux Toolkit function. In this case it collects the form data from CreateOrder.jsx, passes it to createOrder function in apiRestaurant.js which in turn does a POST api call to create the new order in the database. And it finally re-directs the user to /order/newOrder.id page.
export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "true",
  };

  const errors = {};
  if (!isValidPhone(order.phone))
    errors.phone = "Please enter a valid phone number (including area code)";

  if (Object.keys(errors).length > 0) return errors;

  const newOrder = await createOrder(order);

  /* After creating and posting the new order and before redirecting the user to the new order page, clear the cart. Importing the store into a redux function and calling another function, in this case clearCart, to manipulate the store should only be done if completely necessary.*/
  store.dispatch(clearCart());

  return redirect(`/order/${newOrder.id}`);
}
