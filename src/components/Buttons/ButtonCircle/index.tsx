// import { ReactNode } from 'react'
import styles from './button.module.css'
import Link from 'next/link'

export default function ButtonCircle ({ children, size, onClick, type, tooltip }: any) {
  if (onClick) {
    return (
    <button type={type} onClick={onClick} className={styles.button} data-size={size} data-tooltip={tooltip}>
      {children}
    </button>
    )
  }

  return (
    <Link href='/' className={styles.button} data-tooltip='CAMBIAR TEMA'>
      {children}
    </Link>
  )
}
