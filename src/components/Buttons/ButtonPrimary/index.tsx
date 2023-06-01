import Link from 'next/link'
import styles from './button.module.css'
import ButtonRipple from '../ButtonRipple'

export default function ButtonPrimary ({ children, size, onClick, type, tooltip }: any) {
  if (onClick) {
    return (
      <ButtonRipple style={{ borderRadius: '0.5rem' }}>
        <button type={type} onClick={onClick} className={styles.button} data-size={size} data-tooltip={tooltip}>
          {children}
        </button>
      </ButtonRipple>
    )
  }

  return (
    <ButtonRipple style={{ borderRadius: '0.5rem' }}>
      <Link href='' className={styles.button} data-size={size} data-tooltip={tooltip}>
        {children}
      </Link>
    </ButtonRipple>
  )
}
