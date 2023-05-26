import styles from './input.module.css'

export default function Input ({ type, placeholder, style, id }: any) {
  return (
    <input id={id} type={type} placeholder={placeholder} className={styles.input} data-style={style}/>
  )
}
