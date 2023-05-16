import { ReactNode } from 'react'
import styles from './blog.module.css'

export default function Blog ({ children }: { children: ReactNode }) {
  return (
    <div className={styles.section}>
      {children}
    </div>
  )
}
