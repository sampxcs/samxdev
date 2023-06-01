import Link from 'next/link'
import styles from './button.module.css'
import ButtonRipple from '../ButtonRipple'

export default function ButtonSecundary ({ children, size, onClick, type, tooltip }: any) {
  if (onClick) {
    return (
    <button type={type} onClick={onClick} className={styles.button} data-size={size} data-tooltip={tooltip}>
      {children}
    </button>
    )
  }

  return (
    <ButtonRipple style={{ borderRadius: '0.5rem' }}>
      <Link href='/' className={styles.button} data-size={size} data-tooltip={tooltip}>
        {children}
      </Link>
    </ButtonRipple>
  )
}
