import { useState } from "react"

export default function Counter() {
  // TODO: Create a counter that starts at 0
  // TODO: Add a button that increments the counter when clicked
  // TODO: Display the current count on the page

  let [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  )
}