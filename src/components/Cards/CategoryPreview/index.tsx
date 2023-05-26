import Link from 'next/link'
import styles from './category.module.css'
import ArrowRight from '@/components/Icons/ArrowRight'
import ScrollyTelling from '@/components/Sections/ScrollyTelling'

export default function CategoryPreview ({ title, description }: any) {
  return (
    <ScrollyTelling animation='fadeInLeft' style={{ height: '100%' }}>
      <Link href={`/blog/categories/${title}`} className={styles.tag}>
        <div className={styles.content}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <small className={styles.small}>Ver Articulos <ArrowRight width='.75rem' className={styles.arrow}/></small>
      </Link>
    </ScrollyTelling>
  )
}
