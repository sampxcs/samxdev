'use client'

import { useEffect, useState } from 'react'
import CardAside from '../CardAside'
import { useParams } from 'next/navigation'

export default function PostContents () {
  const [contents, setContents] = useState([])
  const { slug } = useParams()

  useEffect(() => {
    const nodeList = document.querySelectorAll('article h2')
    const contentData: any = []

    nodeList.forEach((node) => {
      contentData.push({
        title: node.textContent,
        slug: `${slug}#${node.id}`
      })
    })

    setContents(contentData)
  }, [slug])

  return (
    <CardAside title='Contenidos del articulo' theme='light' data={contents}/>
  )
}
