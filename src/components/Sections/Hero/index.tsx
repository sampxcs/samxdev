import Link from 'next/link'
import styles from './hero.module.css'
import GitHub from '@/components/Icons/GitHub'

export default function Hero ({ header, title, subtitle, page, date, slug }: { header?: string, title: string, subtitle?: string, page?: string, date?: string, slug?: string }) {
  if (page === 'post') {
    return (
    <section className={styles.hero}>
      <p className={styles.data}>
        {date}
        <span>&middot;</span>
        <Link
          className={styles.link}
          href={`https://github.com/sampxcs/samxdev/blob/develop/src/posts/${slug}.md`}
          target='_blank'
        >
          Editar Articulo <GitHub width='1rem' />
        </Link>
      </p>
      <h1>{title}</h1>
    </section>
    )
  }

  return (
    <section className={styles.hero}>
      {header && <h2 className={styles.header} data-page={page}>{header}</h2>}
      <h1>{title}</h1>
      {subtitle && <h2 className={styles.subtitle}>{subtitle}</h2>}
    </section>
  )
}
