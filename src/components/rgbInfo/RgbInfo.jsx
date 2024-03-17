import React from 'react'

export const RgbInfo = ({ value, onColorChange }) => {
    const hexToRgb = (hex) => {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
        return result? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null
    }

    const rgb = hexToRgb(value)

    let text = ''
    let bgColor = 'rgb(255, 255, 255)'
    if (value.length < 6 | !value) {
        text = 'Введите полный HEX код'
        bgColor = 'rgb(255, 255, 255)'
        onColorChange(bgColor)
    } else if (!rgb) {
        text = 'Введен не корректный HEX код'
        bgColor = 'rgb(255, 255, 255)'
        onColorChange(bgColor)
    } else {
        text = `R: ${rgb.r}, G: ${rgb.g}, B: ${rgb.b}`
        bgColor = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`
        onColorChange(bgColor)
    }

  return (
    <div>
        {text}
    </div>
  )
}
