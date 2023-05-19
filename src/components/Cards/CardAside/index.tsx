import Link from 'next/link'
import styles from './card.module.css'

import Card from '@/components/Cards/CardDefault'
import ArrowRight from '@/components/Icons/ArrowRight'

export default function CardAside ({ title, data, type = 'list', theme }: any) {
  if (type === 'tags') {
    const setTags = new Set(data.map(({ tag }: any) => tag))

    return (
    <Card theme={theme} >
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.tags}>
        {/* @ts-ignore */}
        {[...setTags].map((tag: any) => (
          <li key={title}>
            <Link href={`/blog/categories/${tag}`} className={styles.link}>
              <span>#{tag}</span>
            </Link>
          </li>
        ))}
      </ul>
    </Card>
    )
  }

  return (
    <Card theme={theme} >
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.list}>
        {data.map(({ title, slug }: any) => (
          <li key={title}>
            <Link href={`/blog/${slug}`} className={styles.link}>
              <span>{title}</span>
              <ArrowRight width='1.5rem' />
            </Link>
          </li>
        ))}
      </ul>
    </Card>
  )
}
