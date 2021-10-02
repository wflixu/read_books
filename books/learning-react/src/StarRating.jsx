import React, { useState } from "react"
import { FaStar } from "react-icons/fa"

const createArray = (length) => [...Array(length)]

export default function StarRating({ style = {}, totalStars = 5, ...props }) {
  const [selectStars, setSelectStar] = useState(0)
  return (
    <div style={{ padding: "5px", ...style }} {...props}>
      {createArray(totalStars).map((n, i) => {
        return (
          <Star
            key={i}
            selected={selectStars > i}
            onSelect={() => setSelectStar(i + 1)}
          />
        )
      })}
      <p>
        {selectStars} of {totalStars} stars
      </p>
    </div>
  )
}

function Star({ selected = false, onSelect = (f) => f }) {
  return <FaStar color={selected ? "red" : "gray"} onClick={onSelect}></FaStar>
}
