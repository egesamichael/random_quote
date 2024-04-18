import { useState } from 'react'

import './App.css'

function App() {
  const [quote, setQuote] = useState("Some Random Quote")
  const [author, setAuthor] = useState("Author")
  async function getRandomQuote(){

    const response = await fetch("https://api.quotable.io/random");

    let data = await response.json();
    setAuthor(data.author)
    setQuote(data.content)
  }


  return (
    <>
    
      <h1>{quote}</h1>
      <p>{author}</p>
      <div className="card">
        <button onClick={getRandomQuote}>
          Get Quote
        </button>
        <p>
          Just learning react
        </p>
      </div>
  
    </>
  )
}

export default App
