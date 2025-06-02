import { useState } from 'react'
export function useColorCard(defaultColor: string) {
  const [color, setColor] = useState(defaultColor)

  const uptadeColor = (newColor: string) => {
    setColor(newColor)
  }
  return {
    color,
    uptadeColor,
  }
}
