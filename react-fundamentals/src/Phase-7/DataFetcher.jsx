import { useState } from "react"

export default function DataFetcher() {
  // TODO: Create state for loading, error, and data
  // TODO: Render different content based on each state
  // TODO: Add a button to simulate fetching data
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [data, setData] = useState(null)

  const fetchHandler = () => {
    setIsLoading(true)
    
      setTimeout(() => {
        setIsLoading(false)
        setData("Data Loaded!")
      }, 2000)
    }

    if (isLoading) {
      return <p>Loading...</p>
    }

    if (error) {
      return <p>Error: {error}</p>
    }

  return (
    <div>
      <button onClick={fetchHandler}>Fetch Data</button>
      <p>{data || "No data yet"}</p>
    </div>
   )
}