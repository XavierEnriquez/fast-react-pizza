import CreateUser from "../features/user/CreateUser";

function Home() {
  return (
    <div className="text-center">
      <h1 className="mb-10 text-3xl font-semibold">
        The best pizza.
        <br />
        <span className="font-bold text-yellow-500">
          Hot out of the oven, straight to you.
        </span>
      </h1>
      <CreateUser />
    </div>
  );
}

export default Home;
