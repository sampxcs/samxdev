import styles from './hero.module.css'

export default function Hero ({ header, title, subtitle, description, page }: { header?: string, title: string, subtitle?: string, description?: string, page?: string }) {
  return (
    <section className={styles.hero}>
      {header && <h2 className={styles.header} data-page={page}>{header}</h2>}
      <h1 >{title}</h1>
      {subtitle && <h2 className={styles.subtitle}>{subtitle}</h2>}
      {description && <h3 className={styles.description}>{description}</h3>}
    </section>
  )
}
