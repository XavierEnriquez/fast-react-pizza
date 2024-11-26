import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";

function Home() {
  const username = useSelector((state) => state.user.username);

  return (
    <div className="mt-[15vmin] text-center">
      <h1 className="mb-10 text-3xl font-semibold">
        The best pizza.
        <br />
        <span className="font-bold text-yellow-500">
          Hot from the oven, straight to you.
        </span>
      </h1>
      {username === "" ? (
        <CreateUser />
      ) : (
        <Button type="link" to="/menu" className="primary">
          Hey {username}, get your pizza!
        </Button>
      )}
    </div>
  );
}

export default Home;
