'use client'

import Link from 'next/link'
import styles from './hero.module.css'
import GitHub from '@/components/Icons/GitHub'
import ButtonPrimary from '@/components/Buttons/ButtonPrimary'
import ButtonSecundary from '@/components/Buttons/ButtonSecundary'

export default function Hero ({ header, title, description, page, date, slug }: any) {
  return (
    <section className={styles.hero} data-page={page}>
      <div className={styles.content}>
        {date && <p className={styles.data}>
          {date}
          <span>&middot;</span>
          <Link
            className={styles.link}
            href={`https://github.com/sampxcs/samxdev/blob/develop/src/posts/${slug}.md`}
            target='_blank'
          >
            Editar Articulo <GitHub width='1rem' />
          </Link>
        </p>}
        {header && <h2 className={styles.header} >{header}</h2>}
        <div className={styles.title_container} data-page={page}>
          <h1 className={styles.title} data-page={page}>
            {title}
          </h1>
        </div>
        {description && <h2 className={styles.description}>{description}</h2>}
      </div>
      {page === 'home' && (
        <div className={styles.buttons}>
          <ButtonSecundary size='xl'>Proyectos</ButtonSecundary>
          <ButtonPrimary size='xl'>Empezar</ButtonPrimary>
        </div>
      )}
    </section>
  )
}
