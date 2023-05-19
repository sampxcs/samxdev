import Link from 'next/link'
import styles from './button.module.css'

export default function ButtonSecundary ({ children, size, onClick, type, tooltip }: any) {
  if (onClick) {
    return (
    <button type={type} onClick={onClick} className={styles.button} data-size={size} data-tooltip={tooltip}>
      {children}
    </button>
    )
  }

  return (
    <Link href='/' className={styles.button} data-tooltip={tooltip}>
      {children}
    </Link>
  )
}
