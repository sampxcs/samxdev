import Link from 'next/link'
import styles from './header.module.css'

import Theme from '../Icons/Theme'

import Avatar from '../Avatar'
import ButtonCircle from '../ButtonCircle'

const links = [
  {
    label: 'PROYECTOS',
    href: '/projects'
  },
  {
    label: 'ARTICULOS',
    href: '/blog'
  },
  {
    label: 'CATEGORIAS',
    href: '/blog/categories'
  },
  {
    label: 'SOBRE MI',
    href: '/about'
  }
]

export default function Header () {
  return (
    <header className={styles.header}>
      <Link href='/'>
        <Avatar />
      </Link>
      <nav className={styles.nav}>
        <ul>
          {links.map(({ label, href }, index) => (
            <li key={index}><Link href={href} className={styles.link}>{label}</Link></li>
          ))}
        </ul>
      </nav>
      <ButtonCircle>
        <Theme width='1rem' />
      </ButtonCircle>
    </header>
  )
}
