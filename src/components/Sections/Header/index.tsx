'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './header.module.css'

import Theme from '@/components/Icons/Theme'

import Avatar from '@/components/Elements/Avatar'
import ButtonCircle from '@/components/Buttons/ButtonCircle'

const links = [
  {
    label: 'PROYECTOS',
    href: '/projects',
    color: 'var(--color-secundary-500)'
  },
  {
    label: 'ARTICULOS',
    href: '/blog',
    color: 'var(--color-ternay-500)'
  },
  {
    label: 'CATEGORIAS',
    href: '/blog/categories',
    color: 'var(--color-quarter-500)'
  },
  {
    label: 'SOBRE MI',
    href: '/about',
    color: 'var(--color-primary-500)'
  }
]

export default function Header () {
  const pathname = usePathname()

  return (
    <header className={styles.header}>
      <Link href='/'>
        <Avatar />
      </Link>
      <nav className={styles.nav}>
        <ul>
          {links.map(({ label, href, color }, index) => (
            <li key={index}>
              <Link
                className={styles.link}
                data-active={href === pathname}
                /* @ts-ignore */
                style={{ '--data-color': `${color}` }}
                href={href}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <ButtonCircle href='/'>
        <Theme width='1rem' />
      </ButtonCircle>
    </header>
  )
}
