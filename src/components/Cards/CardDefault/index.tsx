import { ReactNode } from 'react'
import styles from './card.module.css'

export default function Card ({ children, theme = 'solid' }: { children: ReactNode, theme?: 'solid' | 'light' }) {
  return (
    <div className={styles[theme]}>
      {children}
    </div>
  )
}
