import Link from 'next/link'
import styles from './footer.module.css'
import GitHub from '@/components/Icons/GitHub'
import LinkedIn from '@/components/Icons/LinkedIn'
import Twitter from '@/components/Icons/Twitter'
import Instagram from '@/components/Icons/Instagram'
import Particles from '@/components/Decorations/Particles'
import Container from '@/components/Sections/Container'

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
      <Container>
        <div className={styles.content}>
          <div className={styles.section}>
            <h4>
              GRACIAS POR LEER! <br/>
            </h4>
            <p>
              ¿Tienes un proyecto emocionante en el que necesites ayuda?, sigueme en mis redes sociales y no dudes en contactarme para charlar.
            </p>
            <p>
              Escribeme a <span className={styles.email}>ianrosales634@gmail.com</span>
            </p>
          </div>
          <div className={styles.section}>
            <h4 className={styles.title}>CATEGORIAS</h4>
            <div className={styles.categories}>
              {
                CATEGORIES_DATA.map(({ title, slug }) => (
                  <Link className={styles.link} href={slug} key={slug}>{title}</Link>
                ))
              }
            </div>
          </div>
          <div className={styles.section}>
            <h4 className={styles.title}>REDES SOCIALES</h4>
              <ul className={styles.section}>
                <li><Link className={styles.link} target='_blank' href='https://github.com/sampxcs'><GitHub width='1rem' />GitHub</Link></li>
                <li><Link className={styles.link} target='_blank' href='https://www.linkedin.com/in/ian-samuel-rosales-leon-38a5b3230'><LinkedIn width='1rem' />LinkedIn</Link></li>
                <li><Link className={styles.link} target='_blank' href='https://twitter.com/samxdev'><Twitter width='1rem' />Twitter</Link></li>
                <li><Link className={styles.link} target='_blank' href='https://www.instagram.com/iansrlx'><Instagram width='1rem' />Instagram</Link></li>
              </ul>
          </div>
        </div>
      </Container>
      <address className={styles.address}>
        CABA, PROVINCIA DE BUENOS AIRES, ARGENTINA.
      </address>
      <Particles />
    </footer>
  )
}
