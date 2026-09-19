import { useState } from "react"

export default function SimpleForm() {
  // TODO: Create state for a single input field
  // TODO: Create an input that's controlled (value + onChange)
  // TODO: Display what the user typed in real time
const [name, setName] = useState('')

const handleInput = (event) => {
    setName(event.target.value)
}

  return (
    <div>
        <p>Simple Form (Phase 5: Exercise 1)</p>
        <p>Input value: {name}</p>
      <input type="text" value={name} onChange={handleInput} placeholder="Input your name" />
    </div>
  )
}