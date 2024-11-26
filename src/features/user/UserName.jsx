import { useSelector } from "react-redux";

function UserName() {
  const username = useSelector((state) => state.user.username);

  if (!username) return null;

  return <div className="text-md hidden font-bold sm:block">{username}</div>;
}

export default UserName;
