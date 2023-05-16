import { ReactNode } from 'react'
import styles from './card.module.css'

export default function Card ({ children, type = 'solid' }: { children: ReactNode, type?: 'solid' | 'light' }) {
  return (
    <div className={styles[type]}>
      {children}
    </div>
  )
}
