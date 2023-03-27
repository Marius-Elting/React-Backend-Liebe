import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [response, setResponse] = useState(0)
  const [retry, setRetry] = useState(false)

  useEffect(() => {
    setResponse("Fetching...")
    fetch("http://localhost:8787/getData")
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setResponse(data.message)
      })
      .catch(err => {
        setResponse("Error")
      })
  }, [retry])

  return (
    <div className="App">
      <p>{response}</p>
      <button onClick={() => setRetry(prev => !prev)}>
        Retry Fetch
      </button>
    </div>
  )
}

export default App
