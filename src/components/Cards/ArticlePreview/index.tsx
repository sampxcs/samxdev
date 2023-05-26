'use client'

import styles from './preview.module.css'

import ArrowRight from '@/components/Icons/ArrowRight'
import ScrollyTelling from '@/components/Sections/ScrollyTelling'

export default function ArticlePreview ({ title, date, description, tags }: any) {
  return (
    <ScrollyTelling animation='fadeInUp' size='sm'>
      <article className={styles.article} id='container'>
        <header id='header'>
          <h4 className={styles.title}>{title}</h4>
          <time className={styles.date} dateTime={date}> &middot; {date}</time>
        </header>
        <p>{description}</p>
        <ul className={styles.tags}>
          {tags.map((tag:any) => (
            <li key={tag.title} className={styles.tag}>#{tag.title}</li>
          ))}
        </ul>
        <small className={styles.small}>Leer más <ArrowRight width='.75rem' className={styles.arrow}/></small>
      </article>
    </ScrollyTelling>
  )
}
