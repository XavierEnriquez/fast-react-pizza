import { useLoaderData } from "react-router-dom";
import MenuItem from "../menu/MenuItem";

function Menu() {
  const menu = useLoaderData();
  return (
    <ul className="flex flex-wrap divide-y divide-stone-300 px-2 md:gap-x-12 lg:justify-between">
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

export default Menu;
