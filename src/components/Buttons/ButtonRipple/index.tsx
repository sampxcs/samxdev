'use client'

import { MouseEventHandler, useEffect, useRef, useState } from 'react'
import styles from './button.module.css'

export default function ButtonRipple ({ children, style }: any) {
  const ref = useRef(null)
  const [coords, setCoords] = useState({ x: -1, y: -1 })
  const [isRippling, setIsRippling] = useState(false)

  useEffect(() => {
    if (coords.x !== -1 && coords.y !== -1) {
      setIsRippling(true)
      setTimeout(() => setIsRippling(false), 300)
    } else setIsRippling(false)
  }, [coords])

  useEffect(() => {
    if (!isRippling) setCoords({ x: -1, y: -1 })
  }, [isRippling])

  const handleCLick: MouseEventHandler<HTMLDivElement> = (e) => {
    if (ref.current) {
      const node = ref.current as HTMLElement
      const rect = node.getBoundingClientRect()
      setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top })
    }
  }

  return (
    <div
      onClick={handleCLick}
      className={styles.button}
      style={style}
      ref={ref}
    >
      {isRippling
        ? (
            <span
              className={styles.ripple}
              style={{
                left: coords.x,
                top: coords.y
              }}
            />
          )
        : (
            ''
          )}
          <span className={styles.content}>{children}</span>
    </div>
  )
}
