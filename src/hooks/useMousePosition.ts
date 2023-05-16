import { useEffect, useState } from 'react'

export const useMousePosition = () => {
  const [cords, setCords] = useState({
    x: 0,
    y: 0
  })

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setCords({ x: event.clientX, y: event.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener(
        'mousemove',
        handleMouseMove
      )
    }
  }, [])

  return cords
}
