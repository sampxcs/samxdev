import { ReactNode } from 'react'
import styles from './aside.module.css'

export default function Aside ({ children }: {children: ReactNode}) {
  return (
    <aside className={styles.aside}>
      {children}
    </aside>
  )
}
