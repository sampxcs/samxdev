import styles from './input.module.css'

export default function Input ({ type, placeholder }: any) {
  return (
    <input type={type} placeholder={placeholder} className={styles.input} />
  )
}
