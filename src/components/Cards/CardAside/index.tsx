import Link from 'next/link'
import styles from './card.module.css'

import Card from '@/components/Cards/CardDefault'
import ArrowRight from '@/components/Icons/ArrowRight'

export default function CardAside ({ title, data, type = 'list', theme }: any) {
  return (
    <Card theme={theme} >
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles[type]}>
        {data.map(({ label }: any) => (
          <li key={label}>
            <Link href='/' className={styles.link}>
              <span>{ type === 'tags' && '#' }{label}</span>
              {type === 'list' && <ArrowRight width='1.5rem' />}
            </Link>
          </li>
        ))}
      </ul>
    </Card>
  )
}
