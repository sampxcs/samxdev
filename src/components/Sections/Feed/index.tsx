import Link from 'next/link'
import styles from './feed.module.css'

import { getPostMetadata } from '@/utils/getPostMetadata'

import ArticlePreview from '@/components/Cards/ArticlePreview'

export default function Feed ({ filter }: any) {
  const postMetadeta = getPostMetadata()

  const data = filter ? postMetadeta.filter((post) => post.tag === filter) : postMetadeta

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{filter ? `Articulos con la categoria "${filter}": ${data.length}` : 'Últimos artículos'}</h2>
      <ul className={styles.ul}>
        {data.map(({ title, date, subtitle, slug, tag }) => (
          <li key={slug}>
            <Link href={`/blog/${slug}`}>
              <ArticlePreview title={title} date={date} description={subtitle} tag={tag} />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
