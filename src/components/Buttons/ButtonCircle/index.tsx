import ButtonRipple from '../ButtonRipple'
import styles from './button.module.css'
import Link from 'next/link'

export default function ButtonCircle ({ children, size, onClick, type, tooltip, href }: any) {
  if (onClick) {
    return (
      <ButtonRipple style={{ borderRadius: '100%' }}>
        <button
          type={type}
          onClick={onClick}
          className={styles.button}
          data-size={size}
          data-tooltip={tooltip}
        >
          {children}
        </button>
      </ButtonRipple>
    )
  }

  return (
    <ButtonRipple style={{ borderRadius: '100%' }}>
      <Link href={href} className={styles.button} data-tooltip='Cambiar Tema'>
        {children}
      </Link>
    </ButtonRipple>
  )
}
