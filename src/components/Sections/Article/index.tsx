import React, { ReactNode } from 'react'
import styles from './article.module.css'
import Link from 'next/link'

export default function Article ({ children, tags }: {children: ReactNode, tags: any}) {
  return (
    <article className={styles.article}>
      {children}
      <ul className={styles.tags}>
      {tags.map(({ title }: any) => (
        <li key={title}>
          <Link href={`/blog/categories/${decodeURI(title)}`} className={styles.tag}>
            #{title}
          </Link>
        </li>
      ))}
    </ul>
    </article>
  )
}
