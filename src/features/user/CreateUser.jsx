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
      className="mx-auto flex max-w-72 flex-col gap-4"
    >
      <p>👋 Welcome! Please start by telling us your name:</p>

      <Input
        type="text"
        placeholder="Your name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-full"
      />

      {username !== "" && (
        <div>
          <Button className="primary">Start your order</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
