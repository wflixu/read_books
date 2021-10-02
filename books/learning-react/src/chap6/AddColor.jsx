import React, { useState } from "react"
import { useInput } from "./hooks"

export function AddColor({ onNewColor = (f) => f }) {
  const [title, resetTitle] = useInput("")
  const [color, resetColor] = useInput("#000000")

  const submit = (e) => {
    e.preventDefault()
    onNewColor(title.value, color.value)
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
