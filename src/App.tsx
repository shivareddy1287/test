import { useEffect, useState } from "react"
import "./App.css"
import { Counter } from "./features/counter/Counter"
import { Quotes } from "./features/quotes/Quotes"
import logo from "./logo.svg"

const App = () => {
  const [text, setText] = useState<string>("")
  const [usersData, setUsersData] = useState<string>("")

  const fetchText = async () => {
    try {
      const response = await fetch(
        "https://photostore-ddauerethphxcraw.southindia-01.azurewebsites.net/",
      )
      const data = await response.text()
      setText(data)
    } catch (error) {
      console.error("Error fetching the text:", error)
    }
  }

  const fetchUsersData = async () => {
    try {
      const response = await fetch(
        "https://photostore-ddauerethphxcraw.southindia-01.azurewebsites.net/api/users",
      )
      const data = await response.text()
      setUsersData(data)
    } catch (error) {
      console.error("Error fetching the text:", error)
    }
  }

  useEffect(() => {
    fetchText()
    fetchUsersData()
  }, [])
  return (
    <div className="App">
      <p>Backend:{text}</p>
      <h1>MongoDB</h1>
      <p>{usersData}</p>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Quotes />
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://react-redux.js.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://reselect.js.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Reselect
          </a>
        </span>
      </header>
    </div>
  )
}

export default App
