import React, { useState, useEffect, useLayoutEffect } from "react"

import "./App.css"
import colorData from "./data/color-data.json"

import { ColorList } from "./chap6/ColorList"

import StarRating from "./StarRating"

function App() {
  const [colors] = useState(colorData)
  useEffect(() => {
    console.log("useEffect")
  })

  useLayoutEffect(() => {
    console.log("useLayoutEffect")
  })
  return <ColorList colors={colors} />
}

export default App
