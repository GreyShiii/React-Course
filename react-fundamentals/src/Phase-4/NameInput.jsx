import { useState } from "react"

export default function NameInput() {
  // TODO: Create an input field
  // TODO: Add an onChange handler that logs what the user types
  // TODO: Display the current input value on the page below the input
let [input, setInput] = useState("")

  const handleInput = (event) => {
    setInput(event.target.value)
  } 
  return (
    <div>
      <p>User input: {input}</p>
      <input onChange={handleInput} />
    </div>
  )
}