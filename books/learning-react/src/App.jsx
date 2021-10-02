import React, { useState, useEffect, useLayoutEffect } from "react"

import "./App.css"
import colorData from "./data/color-data.json"

import { ColorList } from "./chap6/ColorList"

import { AddColor } from "./chap6/AddColor"
import { v4 } from "uuid"

function App() {
  const [colors, setColors] = useState(colorData)
  useEffect(() => {
    console.log("useEffect")
  })

  useLayoutEffect(() => {
    console.log("useLayoutEffect")
  })
  return (
    <>
      <AddColor
        onNewColor={(title, color) => {
          console.log(title, color)
          const newColors = [
            ...colors,
            {
              id: v4(),
              rating: 0,
              title,
              color
            }
          ]
          setColors(newColors)
        }}
      />
      <ColorList
        colors={colors}
        onRemoveColor={(id) => {
          const newColors = colors.filter((color) => {
            return color.id !== id
          })
          setColors(newColors)
        }}
        onRateColor={(id, rating) => {
          const newColors = colors.map((color) =>
            color.id == id ? { ...color, rating } : color
          )
          setColors(newColors)
        }}
      />
    </>
  )
}

export default App
