import React, {
  useState,
  useEffect,
  useLayoutEffect,
  useMemo,
  useCallback
} from "react"

import "./App.css"

// import { ColorList } from "./chap6/ColorList"
// import { AddColor } from "./chap6/AddColor"
import { Checkbox } from "./chap7/Checkbox"
// import { EffectRun } from "./chap7/EffectRun"

import { useAnyKeyRender } from "./chap7/useAnyKeyRender"

function App() {
  useAnyKeyRender()

  const words = useMemo(() => {
    return ["gnar", "foo", "bar"]
  }, [])

  const fn = () => {
    console.log("hello word")
  }

  const fn2 = useCallback(() => {
    console.log("hello word 22")
  }, [])

  useEffect(() => {
    console.log("fresh render")
    fn2()
  }, [fn2])

  useLayoutEffect(() => {
    console.log("useLayoutEffect")
  })
  return (
    <>
      <Checkbox />
    </>
  )
}

export default App
