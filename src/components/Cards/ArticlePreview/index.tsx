import styles from './preview.module.css'

import ArrowRight from '@/components/Icons/ArrowRight'

export default function ArticlePreview ({ title, date, description, tag }: any) {
  return (
    <article className={styles.article}>
      <header>
        <h4 className={styles.title}>{title}</h4>
        <time className={styles.date} dateTime={date}> &middot; {date}</time>
      </header>
      <p>{description}</p>
      <ul className={styles.tags}>
        <div className={styles.tag}>#{tag}</div> {/* agregar mas tags */}
      </ul>
      <small className={styles.small}>Leer más <ArrowRight width='.75rem' className={styles.arrow}/></small>
    </article>
  )
}
