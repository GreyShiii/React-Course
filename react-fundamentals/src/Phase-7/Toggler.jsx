import { useState } from "react";

export default function Toggler() {
  // TODO: Create state for a boolean toggle
  // TODO: Create a button that toggles the state
  // TODO: Conditionally render different text based on the toggle
  const [toggle, setToggle] = useState(false);

  const buttonHandler = () => {
    setToggle(!toggle)
  }

  return (
    <div>
      <button onClick={buttonHandler}>{toggle ? "On" : "Off"}</button>
    </div>
  );
}
