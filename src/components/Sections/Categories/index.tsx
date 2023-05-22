import { getPostMetadata } from '@/utils/getPostMetadata'
import styles from './categories.module.css'
import CategoryPreview from '@/components/Cards/CategoryPreview'

export default function Categories () {
  const postMetadeta = getPostMetadata()

  const dataTags = Array.from(postMetadeta.map(({ tags }: any) => tags).flat())
  // @ts-ignore
  const tags = [...new Set(dataTags.map(JSON.stringify))].map(JSON.parse)

  return (
    <section className={styles.section}>
      <ul className={styles.tags}>
        {tags.map(({ title, description }) => (
          <li key={title}>
            <CategoryPreview title={title} description={description} />
          </li>
        ))}
      </ul>
    </section>
  )
}
