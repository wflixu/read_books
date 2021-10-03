import { useEffect, useState } from "react"

export const useAnyKeyRender = () => {
  const [, forceRender] = useState()

  useEffect(() => {
    window.addEventListener("keydown", forceRender)

    return () => window.removeEventListener("keydown", forceRender)
  })
}
