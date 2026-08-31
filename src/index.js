import React from "react"
import ReactDOM from "react-dom/client"
import Navbar from "./scripts/Navbar"

const navbarMount = document.querySelector("#cmj-navbar")
if (navbarMount) {
  ReactDOM.createRoot(navbarMount).render(<Navbar />)
}