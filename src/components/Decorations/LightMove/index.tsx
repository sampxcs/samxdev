'use client'

import styles from './light.module.css'
import { useMousePosition } from '@/hooks/useMousePosition'

export default function LightMove () {
  const cords = useMousePosition()

  return (
    <div className={styles.container}>
      <div
        className={styles.light}
        style={{
          top: `calc(${cords.y / 10}px - 25%)`,
          right: `-${cords.x / 10}px`,
          filter: `blur(${200 + (cords.x / 20)}px)`
        }}
      />
    </div>
  )
}
