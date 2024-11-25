import { Link } from "react-router-dom";

function Button({ type, to, disabled, children }) {
  const primary =
    "inline-block rounded-md bg-yellow-400 px-4 py-2 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2 disabled:cursor-not-allowed";

  const btnLink = "text-sm font-semibold text-blue-500 hover:text-blue-600";

  if (type === "btnlink")
    return (
      <Link to={to} className={btnLink}>
        {children}
      </Link>
    );

  return (
    <button className={type === "primary" && primary} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
