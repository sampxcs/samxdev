'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import styles from './contents.module.css'

import Card from '../CardDefault'
import ArrowRight from '@/components/Icons/ArrowRight'

export default function PostContents () {
  const [contents, setContents] = useState([])
  const [isActive, setIsActive] = useState({
    id: '',
    state: false
  })
  const { slug } = useParams()

  useEffect(() => {
    const nodeList = document.querySelectorAll('article h2')
    const contentData: any = []

    nodeList.forEach((node) => {
      contentData.push({
        id: node.id,
        title: node.textContent,
        slug: `${slug}#${node.id}`
      })
    })

    setContents(contentData)
  }, [slug])

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const nodeList = document.querySelectorAll('article h2')
      nodeList.forEach((node) => {
        const { y } = node.getBoundingClientRect()
        if (y < 300) {
          setIsActive({
            id: node.id,
            state: true
          })
        }
      })
    })
  }, [])

  return (
    <>
      {
      contents
        ? <Card theme='light' >
            <h2 className={styles.title}>Contenidos del articulo</h2>
            <ul className={styles.list}>
              {contents.map(({ title, slug, id }: any) => (
                <li key={title} data-active={isActive.id === id && isActive.state}>
                  <a href={`/blog/${slug}`} className={styles.link}>
                    <span>{title}</span>
                    <ArrowRight width='1rem' />
                  </a>
                </li>
              ))}
            </ul>
          </Card>
        : <span>Cargando...</span>
    }
    </>
  )
}
