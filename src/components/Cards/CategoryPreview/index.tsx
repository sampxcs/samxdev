import Link from 'next/link'
import styles from './category.module.css'
import ArrowRight from '@/components/Icons/ArrowRight'

export default function CategoryPreview ({ title, description }: any) {
  return (
    <Link href={`/blog/categories/${title}`} className={styles.tag}>
      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <small className={styles.small}>Ver Articulos <ArrowRight width='.75rem' className={styles.arrow}/></small>
    </Link>
  )
}
