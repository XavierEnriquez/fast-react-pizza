import { useFetcher, useLoaderData } from "react-router-dom";

import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";
import OrderItem from "./OrderItem";
import { useEffect } from "react";

// Order # IAB2VP, Order # 0DHDIX, Order # G3L2Q0, Order # SUBQE2, Order # PQ02PS, Order # HZUD7A

function Order() {
  const order = useLoaderData();

  const menuFetcher = useFetcher();
  useEffect(
    function () {
      if (!menuFetcher.data && menuFetcher.state === "idle")
        menuFetcher.load("/menu");
    },
    [menuFetcher],
  );

  // Everyone can search for all orders, so for privacy reasons exclude names or address, these are only for the restaurant staff
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="m-auto max-w-2xl space-y-6">
      <div className="flex flex-wrap items-baseline justify-between gap-4">
        <h2 className="px-4 text-xl font-semibold">Order # {id} Status</h2>

        <div className="flex flex-wrap gap-2">
          {priority && (
            <span className="text-nowrap rounded-full bg-red-500 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-red-50">
              Priority Order
            </span>
          )}
          <span className="rounded-full bg-green-500 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-green-50">
            {status}
          </span>
        </div>
      </div>

      <div className="flex flex-wrap items-baseline justify-between gap-2 bg-stone-200 p-4">
        <p className="font-medium">
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order delivered"}
        </p>
        <p>(Estimated delivery: {formatDate(estimatedDelivery)})</p>
      </div>

      <ul className="divide-y divide-stone-200 border-y px-4">
        {cart.map((item) => (
          <OrderItem
            item={item}
            key={item.pizzaId}
            ingredients={
              menuFetcher?.data?.find((el) => el.id === item.pizzaId)
                .ingredients ?? []
            }
            isLoadingIngredients={menuFetcher.state === "loading"}
          />
        ))}
      </ul>

      <div className="space-y-4 bg-stone-200 p-4">
        <div className="space-y-1">
          <p>Pizza total : {formatCurrency(orderPrice)}</p>
          {priority && <p>Priority fee: {formatCurrency(priorityPrice)}</p>}
        </div>
        <div>
          <p className="font-medium">
            Due on delivery: {formatCurrency(orderPrice + priorityPrice)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Order;
