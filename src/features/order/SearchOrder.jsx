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
        placeholder="Search order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="bg-yellow-100 transition-all duration-300 md:w-48 md:focus:w-64"
      />
    </form>
  );
}

export default SearchOrder;
