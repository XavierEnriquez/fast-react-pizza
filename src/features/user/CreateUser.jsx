import { useState } from "react";
import Button from "../../ui/Button";
import Input from "../../ui/input";

function CreateUser() {
  const [username, setUsername] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex max-w-72 flex-col gap-4"
    >
      <p>👋 Welcome! Please start by telling us your name:</p>

      <Input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-full"
      />

      {username !== "" && (
        <div>
          <Button className="primary">Place your order</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
