import { ReactNode } from 'react'
import styles from './button.module.css'
import Link from 'next/link'

export default function ButtonCircle ({ children }: { children: ReactNode }) {
  return (
    <Link href='/' className={styles.button} data-tooltip='CAMBIAR TEMA'>
      {children}
    </Link>
  )
}
