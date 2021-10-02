import React, { useState, useEffect, useLayoutEffect } from "react"

import "./App.css"

import { ColorList } from "./chap6/ColorList"

import { AddColor } from "./chap6/AddColor"
import { v4 } from "uuid"

function App() {
  useEffect(() => {
    console.log("useEffect")
  })

  useLayoutEffect(() => {
    console.log("useLayoutEffect")
  })
  return (
    <>
      <AddColor />
      <ColorList />
    </>
  )
}

export default App
