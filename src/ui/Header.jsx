import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import UserName from "../features/user/UserName";

function Header() {
  return (
    <header className="flex flex-col gap-2 border-b border-stone-200 bg-yellow-500 px-8 py-4 text-center font-semibold uppercase sm:flex-row sm:justify-between">
      <Link to="/" className="tracking-[.25rem]">
        Fast React Pizza Co.
      </Link>
      <SearchOrder />
      <UserName />
    </header>
  );
}

export default Header;
