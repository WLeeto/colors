import React, { useState } from 'react'

import { HexForm } from '../hexForm/HexForm'
import { RgbInfo } from '../rgbInfo/RgbInfo'

import './main.css'

export const Main = () => {
    const [rgbText, setRgb] = useState('')
    const [backgroundColor, setBackgroundColor] = useState()

    const handleRgbChange = (newRgb) => {
        setRgb(newRgb)
    }

    const handleColorChange = (color) => {
        setBackgroundColor(color);
    }

  return (
    < div className='mainContainer' style={{ backgroundColor: backgroundColor }}>
      <HexForm onRgbChange={handleRgbChange}/>
      <RgbInfo value={rgbText} onColorChange={handleColorChange}/>
    </div>
  )
}
