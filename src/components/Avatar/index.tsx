import Image from 'next/image'
import styles from './avatar.module.css'

export default function Avatar () {
  return (
    <div className={styles.avatar}>
      <picture className={styles.picture}>
        <Image src='/profile.jpg' alt='Ian Rosales' width={42} height={42} />
      </picture>
      <div className={styles.text}>
        <p>Ian Rosales</p>
        <small>@samxdev</small>
      </div>
    </div>
  )
}
