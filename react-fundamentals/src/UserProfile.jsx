import { useState } from "react"

export default function UserProfile() {
  // TODO: Create state for name and age
  // TODO: Render input fields for both
  // TODO: When inputs change, update state
  // TODO: Display "Name: [name], Age: [age]"
  const [name, setName] = useState("");
  const [age, setAge] = useState(0)

  const handleName = (event) => {
    setName(event.target.value)
  }

  const handleAge = (event) => {
    setAge(event.target.value)
  }
  return (
    <div>
      <input type="text" onChange={handleName} placeholder="Set your name" />
      <p>Your name is: {name}</p>
      <input type="number" onChange={handleAge} placeholder="Set your age" />
      <p>Your age is: {age}</p>
    </div>
  )
}