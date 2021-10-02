import React from "react"
import { useColors } from "./color-hooks"

import { useInput } from "./hooks"

export function AddColor() {
  const [title, resetTitle] = useInput("")
  const [color, resetColor] = useInput("#000000")
  const { addColor } = useColors()
  const submit = (e) => {
    e.preventDefault()
    console.log("sjdkjdk")
    addColor(title.value, color.value)
    resetColor("")
    resetTitle("")
  }

  return (
    <form onSubmit={submit}>
      <input type="text" {...title} placeholder="color title" required />
      <input type="color" {...color} required />
      <button>ADD</button>
    </form>
  )
}
