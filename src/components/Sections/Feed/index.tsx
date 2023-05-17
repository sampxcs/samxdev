import Link from 'next/link'
import styles from './feed.module.css'

import { getPostMetadata } from '@/utils/getPostMetadata'

import ArticlePreview from '@/components/Cards/ArticlePreview'

export default function Feed () {
  const postsMetadeta = getPostMetadata()

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Últimos artículos</h2>
      <ul className={styles.ul}>
        {postsMetadeta.map(({ title, date, subtitle, slug }) => (
          <li key={slug}>
            <Link href={`/blog/posts/${slug}`}>
              <ArticlePreview title={title} date={date} description={subtitle} />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
