import "./index.css"
import App from "./App"
import React from "react"
import Chat from "./Chat"
import ReactDOM from "react-dom/client"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <App />
    <Chat />
  </React.StrictMode>,
)
