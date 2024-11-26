import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import UserName from "../features/user/UserName";

function Header() {
  return (
    <header className="flex flex-col items-center gap-2 border-b border-stone-200 bg-yellow-500 px-8 py-4 font-semibold uppercase sm:flex-row sm:flex-wrap sm:justify-between">
      <Link to="/" className="text-xl tracking-[.25rem]">
        Fast React Pizza Co.
      </Link>
      <SearchOrder />
      <UserName />
    </header>
  );
}

export default Header;
