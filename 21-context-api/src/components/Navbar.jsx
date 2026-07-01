// import React from 'react'

import { useContext } from "react"
import Nav2 from "./Nav2"
import { ThemeDataContext } from "../context/ThemeContext"


const Navbar = () => {
    const [theme] = useContext(ThemeDataContext)
  return (
    <div className={`nav ${theme}`}>
        <h2 className="fond-bold">Xenora</h2>
        <Nav2 />
    </div>
  )
}

export default Navbar
