import './App.css'
import {useState, useEffect}  from 'react'

function App() {

  const [message, setMessage] = useState("")

  useEffect(()=>{
    fetch("http://localhost:4000/api/message")
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch((err) => console.error("Error", err))


  },[])

  return (
    <>
      <h1>Docker</h1>
      <h2>Data : {message}</h2>
    </>
  )
}

export default App
