import ButtonSecundary from '@/components/Buttons/ButtonSecundary'
import styles from './notfound.module.css'

import { Space_Grotesk as SpaceGrotesk } from 'next/font/google'

const spaceGrotesk = SpaceGrotesk({ weight: ['300', '500', '700'], subsets: ['latin'] })

export default function NotFound () {
  return (
    <div className={styles.container} >
      <div className={`${styles.text} ${spaceGrotesk.className}`}>
        <h1>404</h1>
        <div>
          <p>¡Ups! No podemos encontrar la página que estabas buscando.</p>
          <small>El enlace que seguiste no existe o esta roto.</small>
        </div>
        <ButtonSecundary href='/'>
            Vover a casa
        </ButtonSecundary>
      </div>
      <div className={styles.content}>
        <div className={styles.astronaut}>
          <div className={styles.head} />
          <div className={`${styles.arm} ${styles.armLeft}`} />
          <div className={`${styles.arm} ${styles.armRight}`} />
          <div className={styles.body}>
            <div className={styles.panel} />
          </div>
          <div className={`${styles.leg} ${styles.legLeft}`} />
          <div className={`${styles.leg} ${styles.legRight}`} />
          <div className={styles.schoolbag} />
        </div>
        <div className={styles.planet} />
        <div className={styles.rocket}>
          <div className={styles.rocketBody}>
            <div className={styles.body}></div>
            <div className={`${styles.fin} ${styles.finLeft}`}></div>
            <div className={`${styles.fin} ${styles.finRight}`}></div>
            <div className={styles.window}></div>
          </div>
          <div className={styles.exhaustFlame}></div>
        </div>
      </div>
      <div className={styles.light} />
    </div>
  )
}
