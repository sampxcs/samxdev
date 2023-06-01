import Search from '@/components/Icons/Search'
import styles from './input.module.css'

export default function Input ({ type, placeholder, style, id, role }: any) {
  return (
    <label className={styles.label} data-style={style} data-role={role}>
      {role === 'search' && (
        <div className={styles.icon}>
          <Search width='1rem'/>
        </div>
      )}
      <input id={id} type={type} placeholder={placeholder} className={styles.input} />
      {role === 'search' && (
        <div className={styles.info}>
          <span>Ctrl</span>
          <span>K</span>
        </div>
      )}
    </label>
  )
}
