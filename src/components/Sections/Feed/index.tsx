import Link from 'next/link'
import styles from './feed.module.css'

import { getPostMetadata } from '@/utils/getPostMetadata'

import ArticlePreview from '@/components/Cards/ArticlePreview'
import ArrowRight from '@/components/Icons/ArrowRight'

export default function Feed ({ filter, limit, link }: any) {
  const postMetadeta = getPostMetadata()

  const data = filter ? postMetadeta.filter((post) => post.tags.map((tag: any) => tag.title).includes(decodeURI(filter))) : postMetadeta

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{filter ? `Articulos con la categoria "${decodeURI(filter)}" ( ${data.length} )` : 'Últimos artículos'}</h2>
      <ul className={styles.ul}>
        {data.slice(0, limit || data.length).map(({ title, date, subtitle, slug, tags }) => (
          <li key={slug}>
            <Link href={`/blog/${slug}`}>
              <ArticlePreview title={title} date={date} description={subtitle} tags={tags} />
            </Link>
          </li>
        ))}
      </ul>
      {link && <div className={styles.link}>
        <Link href='/blog'>Ver más artículos <ArrowRight width='.75rem' className={styles.arrow}/></Link>
      </div>}
    </section>
  )
}
