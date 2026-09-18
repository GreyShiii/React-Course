import { useState } from "react"

export default function ColorPicker() {
    const [color, setColor] = useState("red")
  // TODO: Create state for the selected color (start with 'red')
  // TODO: Create three buttons: Red, Green, Blue
  // TODO: When a button is clicked, update the color state
  // TODO: Display a div with backgroundColor set to the current color
const handleColor = (newColor) => {
    setColor(newColor);
}

  return (
    <div>
        <button onClick={() => handleColor("red")}>Red</button>
        <button onClick={() => handleColor("green")}>Green</button>
        <button onClick={() => handleColor("blue")}>Blue</button>
        <div style={{backgroundColor: color}}>
            <p>This div color is {color}</p>
        </div>
    </div>
  )
}