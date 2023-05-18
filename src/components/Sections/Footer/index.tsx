import Link from 'next/link'
import styles from './footer.module.css'
import GitHub from '@/components/Icons/GitHub'
import LinkedIn from '@/components/Icons/LinkedIn'
import Twitter from '@/components/Icons/Twitter'
import Instagram from '@/components/Icons/Instagram'

const CATEGORIES_DATA = [
  {
    slug: 'categories/react',
    title: 'React'
  },
  {
    slug: 'categories/nextjs',
    title: 'Next.js'
  },
  {
    slug: 'categories/nodejs',
    title: 'Node.js'
  },
  {
    slug: 'categories/css',
    title: 'CSS'
  },
  {
    slug: 'categories/animations',
    title: 'Animaciones'
  },
  {
    slug: 'categories/javascript',
    title: 'JavaScript'
  },
  {
    slug: 'categories/python',
    title: 'Python'
  },
  {
    slug: 'categories/sql',
    title: 'SQL'
  },
  {
    slug: 'categories/git',
    title: 'Git'
  },
  {
    slug: 'categories/java',
    title: 'Java'
  }
]

export default function Footer () {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.section}>
          <h4>
            GRACIAS POR LEER! <br/>
          </h4>
          <p>
            ¿TIENES UN PROYECTO EMOCIONANTE EN EL QUE NECESITES AYUDA?, SIGUEME EN MIS REDES SOCIALES Y NO DUDES EN CONTACTARME PARA CHARLAR.
          </p>
          <p>
            ESCRIBEME AL <span className={styles.email}>IANROSALES634@GMAIL.COM</span>
          </p>
        </div>
        <div className={styles.section}>
          <h4 className={styles.title}>CATEGORIAS</h4>
          <div className={styles.categories}>
            {
              CATEGORIES_DATA.map(({ title, slug }) => (
                <Link className={styles.link} href={slug} key={slug}>{title.toLocaleUpperCase()}</Link>
              ))
            }
          </div>
        </div>
        <div className={styles.section}>
          <h4 className={styles.title}>REDES SOCIALES</h4>
            <ul className={styles.section}>
              <li><Link className={styles.link} target='_blank' href='https://github.com/sampxcs'><GitHub width='1rem' /> GITHUB</Link></li>
              <li><Link className={styles.link} target='_blank' href='https://www.linkedin.com/in/ian-samuel-rosales-leon-38a5b3230'><LinkedIn width='1rem' /> LINKEDIN</Link></li>
              <li><Link className={styles.link} target='_blank' href='https://twitter.com/samxdev'><Twitter width='1rem' /> TWITTER</Link></li>
              <li><Link className={styles.link} target='_blank' href='https://www.instagram.com/iansrlx'><Instagram width='1rem' /> INSTAGRAM</Link></li>
            </ul>
        </div>
      </div>
      <address className={styles.address}>
        CABA, PROVINCIA DE BUENOS AIRES, ARGENTINA.
      </address>
    </footer>
  )
}
