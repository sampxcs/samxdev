import styles from './hero.module.css'

export default function Hero ({ title, subtitle, description, page }: { title: string, subtitle?: string, description?: string, page: string }) {
  return (
    <div className={styles.hero}>
      <h2 className={styles.hello}>Hola Mundo!</h2>
      <h1 className={styles[page]}>{title}</h1>
      {subtitle && <h2 className={styles.subtitle}>{subtitle}</h2>}
      {description && <h3 className={styles.description}>{description}</h3>}
    </div>
  )
}
