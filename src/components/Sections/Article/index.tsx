import React, { ReactNode } from 'react'
import styles from './article.module.css'

export default function Article ({ children }: {children: ReactNode}) {
  return (
    <article className={styles.article}>
      {children}
    </article>
  )
}
