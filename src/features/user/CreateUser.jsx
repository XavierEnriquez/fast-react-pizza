import { useState } from "react";
import Button from "../../ui/Button";
import Input from "../../ui/input";
import { useDispatch } from "react-redux";
import { updateName } from "./userSlice";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!username) return;
    dispatch(updateName(username));
    navigate("./menu");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex max-w-xl flex-col gap-4"
    >
      <p className="text-lg">
        👋 Welcome! Enter your name to start your order:
      </p>

      <Input
        className="input"
        type="text"
        placeholder="Your name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      {username !== "" && (
        <div>
          <Button className="primary">Choose your pizzas</Button>
        </div>
      )}
      {username === "" && (
        <div className="mt-8">
          <span>or checkout our</span>
          <Button type="link" to="/menu" className="link">
            menu
          </Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
