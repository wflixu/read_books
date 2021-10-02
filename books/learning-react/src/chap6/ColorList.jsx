import React, { useContext, useReducer } from "react"

import { useColors } from "./color-hooks"
import { Color } from "./Color"

export function ColorList() {
  const { colors } = useColors()
  if (!colors.length) {
    return <div>No Color Listed.</div>
  }

  return (
    <div>
      {colors.map((color) => (
        <Color key={color.id} {...color} />
      ))}
    </div>
  )
}
