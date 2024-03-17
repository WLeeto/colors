import React, { useState } from 'react'

export const HexForm = ({ onRgbChange }) => {

    const [hexColor, setHexColor] = useState('')

    const handleChange = (event) => {
        let value = event.target.value.replace(/^#/, '')
        setHexColor(value)
        onRgbChange(value)
      }

  return (
    <form>
      <input
        id="hexCode"
        type="text"
        maxLength="7"
        value={'#' + hexColor}
        onChange={handleChange} />
    </form>
  )
}
