import { Link } from "react-router-dom";
import clsx from "clsx";

/*Using clsx to sort Tailwind css classes in text strings passed on into a function. clsx is a (239B) utility for constructing className strings conditionally by Luke Edwards. https://github.com/lukeed/clsx  */

function Button({ type, className, to, disabled, children }) {
  const base = clsx(
    "inline-block rounded-xl font-bold uppercase tracking-wide transition-all duration-300 focus:outline-none focus:ring focus:ring-offset-2 disabled:cursor-not-allowed",
  );

  const primary = clsx(
    "bg-yellow-400 px-4 py-3 text-stone-700 hover:bg-yellow-300 focus:ring-yellow-300 sm:px-5 sm:py-4",
  );
  const secondary = clsx(
    "border-2 border-stone-300 px-4 py-3 text-stone-400 hover:bg-stone-300 hover:text-stone-800 focus:ring-stone-300 sm:px-5 sm:py-4",
  );
  const small = clsx(
    "bg-yellow-400 px-3 py-2 text-sm text-stone-700 hover:bg-yellow-300 focus:ring-yellow-300 sm:px-4 sm:py-3",
  );
  const link = clsx(
    "text-nowrap px-4 py-3 text-sm font-semibold text-blue-500 hover:text-blue-600",
  );
  const link_cart = clsx(
    "text-nowrap px-4 py-3 font-semibold hover:text-white/60",
  );

  const styles = {
    primary: `${base} ${primary}`,
    secondary: `${base} ${secondary}`,
    small: `${base} ${small}`,
    link: `${link}`,
    link_cart: `${link_cart}`,
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
