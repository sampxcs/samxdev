import { ReactNode } from 'react'
import styles from './container.module.css'
import ScrollyTelling from '@/components/Sections/ScrollyTelling'

export default function Blog ({ children }: { children: ReactNode }) {
  return (
    // @ts-ignore
    <ScrollyTelling animation='fadeInUp'>
      <div className={styles.container}>
        {children}
      </div>
    </ScrollyTelling>
  )
}
