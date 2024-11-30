import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../ui/input";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        className="w-full rounded-xl bg-yellow-100 px-4 py-2 text-sm transition-all duration-300 focus:outline-none focus:ring focus:ring-yellow-400 sm:px-5 sm:py-3 md:w-48 md:focus:w-64"
        name="search_order"
        placeholder="Search order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}

export default SearchOrder;
