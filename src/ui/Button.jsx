import { Link } from "react-router-dom";

function Button({ type, className, to, disabled, children }) {
  const base =
    "inline-block rounded-md bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-all duration-300 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2 disabled:cursor-not-allowed";

  const styles = {
    primary: `${base} px-4 py-3 sm:px-5 sm:py-4`,
    small: `${base} text-sm px-3 py-2 sm:px-4 sm:px-3`,
    link: "text-sm font-semibold text-blue-500 hover:text-blue-600",
  };

  if (type === "link")
    return (
      <Link to={to} className={styles[className]}>
        {children}
      </Link>
    );

  return (
    <button className={styles[className]} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
