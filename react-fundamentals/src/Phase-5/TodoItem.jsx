import { useState } from "react"

export default function TodoItem() {
  // TODO: Create state for whether this todo is completed
  // TODO: Render a checkbox input
  // TODO: Render the todo text
  // TODO: When checkbox changes, toggle the completed state
  // TODO: If completed, show the text with a strikethrough style
const [isCompleted, setIsCompleted] = useState(false)

const handleChange = (event) => {
    setIsCompleted(event.target.checked)
}
  return (
    <div>
        <p style={isCompleted ? {textDecoration: 'line-through'} : {}}>Learn React</p>
      <input type="checkbox" onChange={handleChange} />
    </div>
  )
}