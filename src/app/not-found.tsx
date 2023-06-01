import Particles from '@/components/Decorations/Particles'
import NotFound from '@/components/Sections/NotFound'
import styles from './page.module.css'

export default function notFound () {
  return (
    <>
      <div className={styles.bg}/>
      <Particles />
      <NotFound />
    </>
  )
}
