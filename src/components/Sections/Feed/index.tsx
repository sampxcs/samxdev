import Link from 'next/link'
import styles from './feed.module.css'

import ArticlePreview from '@/components/Cards/ArticlePreview'

const ARTICLES_DATA = [
  {
    id: 1,
    title: 'Enlace de Datos en React',
    description: 'Como desarrolladores, no nos gusta trabajar con formularios, ¡pero son una parte fundamental de la mayoría de las aplicaciones web! En este tutorial, aprenderá exactamente cómo conectar todos los diferentes controles de formulario en React. ¡Nunca olvides cómo vincular datos a una casilla de verificación o botón de opción de nuevo!',
    date: '10 Jun 2021',
    tags: ['React', 'TypeScript', 'MySQL', 'TailwindCSS']
  },
  {
    id: 2,
    title: 'Enlace de Datos en React',
    description: 'Como desarrolladores, no nos gusta trabajar con formularios, ¡pero son una parte fundamental de la mayoría de las aplicaciones web! En este tutorial, aprenderá exactamente cómo conectar todos los diferentes controles de formulario en React. ¡Nunca olvides cómo vincular datos a una casilla de verificación o botón de opción de nuevo!',
    date: '10 Jun 2021',
    tags: ['React', 'TypeScript', 'MySQL', 'TailwindCSS']
  },
  {
    id: 3,
    title: 'Enlace de Datos en React',
    description: 'Como desarrolladores, no nos gusta trabajar con formularios, ¡pero son una parte fundamental de la mayoría de las aplicaciones web! En este tutorial, aprenderá exactamente cómo conectar todos los diferentes controles de formulario en React. ¡Nunca olvides cómo vincular datos a una casilla de verificación o botón de opción de nuevo!',
    date: '10 Jun 2021',
    tags: ['React', 'TypeScript', 'MySQL', 'TailwindCSS']
  },
  {
    id: 4,
    title: 'Enlace de Datos en React',
    description: 'Como desarrolladores, no nos gusta trabajar con formularios, ¡pero son una parte fundamental de la mayoría de las aplicaciones web! En este tutorial, aprenderá exactamente cómo conectar todos los diferentes controles de formulario en React. ¡Nunca olvides cómo vincular datos a una casilla de verificación o botón de opción de nuevo!',
    date: '10 Jun 2021',
    tags: ['React', 'TypeScript', 'MySQL', 'TailwindCSS']
  },
  {
    id: 5,
    title: 'Enlace de Datos en React',
    description: 'Como desarrolladores, no nos gusta trabajar con formularios, ¡pero son una parte fundamental de la mayoría de las aplicaciones web! En este tutorial, aprenderá exactamente cómo conectar todos los diferentes controles de formulario en React. ¡Nunca olvides cómo vincular datos a una casilla de verificación o botón de opción de nuevo!',
    date: '10 Jun 2021',
    tags: ['React', 'TypeScript', 'MySQL', 'TailwindCSS']
  },
  {
    id: 6,
    title: 'Enlace de Datos en React',
    description: 'Como desarrolladores, no nos gusta trabajar con formularios, ¡pero son una parte fundamental de la mayoría de las aplicaciones web! En este tutorial, aprenderá exactamente cómo conectar todos los diferentes controles de formulario en React. ¡Nunca olvides cómo vincular datos a una casilla de verificación o botón de opción de nuevo!',
    date: '10 Jun 2021',
    tags: ['React', 'TypeScript', 'MySQL', 'TailwindCSS']
  }
]

export default function Feed () {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Últimos artículos</h2>
      <ul className={styles.ul}>
        {ARTICLES_DATA.map(({ id, title, description, date, tags }) => (
          <li key={id}>
            <Link href={'/'}>
              <ArticlePreview title={title} description={description} date={date} tags={tags}/>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
