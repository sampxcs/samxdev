import ButtonRipple from '../ButtonRipple'
import styles from './button.module.css'
import Link from 'next/link'

export default function ButtonCircle ({ children, size, onClick, type, tooltip, href }: any) {
  if (onClick) {
    return (
      <button
          type={type}
          onClick={onClick}
          data-tooltip={tooltip}
        >
        <ButtonRipple style={{ borderRadius: '100%' }}>
          <span
            className={styles.button}
            data-size={size}
          >
            {children}
          </span>
        </ButtonRipple>
      </button>
    )
  }

  return (
      <Link href={href} data-tooltip='Cambiar Tema'>
        <ButtonRipple style={{ borderRadius: '100%' }}>
            <span className={styles.button}>
              {children}
            </span>
        </ButtonRipple>
      </Link>
  )
}
