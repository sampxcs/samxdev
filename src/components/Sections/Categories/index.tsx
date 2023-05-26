import { getPostMetadata } from '@/utils/getPostMetadata'
import styles from './categories.module.css'
import CategoryPreview from '@/components/Cards/CategoryPreview'
import Input from '@/components/Forms/Input'

export default function Categories () {
  const postMetadeta = getPostMetadata()

  const dataTags = Array.from(postMetadeta.map(({ tags }: any) => tags).flat())
  // @ts-ignore
  const tags = [...new Set(dataTags.map(JSON.stringify))].map(JSON.parse)

  return (
    <section className={styles.section}>
      <form className={styles.form}>
        <Input id='search' placeholder='Buscar categoría...'/>
      </form>
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
