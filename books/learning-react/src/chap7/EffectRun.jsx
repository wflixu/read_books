import React, { useEffect, useState } from "react"

export function EffectRun() {
  const [val, setVal] = useState("")
  const [phrase, setPhrase] = useState("example phrase")

  const createPhrase = () => {
    setPhrase(val)
    setVal("")
  }

  useEffect(() => {
    console.log(`typing ${val}`)
  }, [val])

  useEffect(() => {
    console.log(`saved phrase ${phrase}`)
  }, [phrase])

  return (
    <>
      <h2>flealjd jakdsjfp hparj:</h2>
      <input
        name="name"
        type="text"
        value={val}
        onChange={(e) => setVal(e.target.value)}
      />
      <button onClick={createPhrase}> send</button>
    </>
  )
}
