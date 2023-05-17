import Markdown from 'markdown-to-jsx'

import CardAside from '@/components/Cards/CardAside'
import Article from '@/components/Sections/Article'
import Aside from '@/components/Sections/Aside'
import Blog from '@/components/Sections/Blog'
import Hero from '@/components/Sections/Hero'

import { getPostContent } from '@/utils/getPostContent'
import { getPostMetadata } from '@/utils/getPostMetadata'

const TRENDING_DATA = [
  {
    label: 'Una guía interactiva para las transiciones CSS'
  },
  {
    label: 'Una guía interactiva de Flexbox'
  },
  {
    label: 'El fin del desarrollo front-end'
  },
  {
    label: 'Mi restablecimiento de CSS personalizado'
  },
  {
    label: 'Variables CSS para React Devs'
  },
  {
    label: 'Diseñando Sombras en CSS'
  },
  {
    label: 'Cómo aprender cosas rápidamente'
  },
  {
    label: 'Por qué React Re-Renderiza?'
  },
  {
    label: 'Construyendo un Botón 3D Mágico'
  }
]

const CATEGORIES_DATA = [
  {
    label: 'React'
  },
  {
    label: 'Next.js'
  },
  {
    label: 'Node.js'
  },
  {
    label: 'CSS'
  },
  {
    label: 'Animaciones'
  },
  {
    label: 'JavaScript'
  },
  {
    label: 'Python'
  },
  {
    label: 'SQL'
  },
  {
    label: 'Git'
  },
  {
    label: 'Java'
  }

]

export const generateStaticParams = async () => {
  const posts = getPostMetadata()
  return posts.map(({ slug }) => ({ slug }))
}

export const generateMetadata = async ({ params }: any) => {
  const { data } = getPostContent(params.slug)
  return {
    title: data.title,
    description: data.subtitle
  }
}

export default function Page ({ params }: any) {
  const { slug } = params
  const { content, data } = getPostContent(slug)

  return (
    <div>
      <Hero
        title={data.title}
        page='post'
      />
      <Blog>
        <Article>
          <Markdown>
            {content}
          </Markdown>
        </Article>
        <Aside>
          <CardAside title='Los más vistos' data={TRENDING_DATA} />
          <CardAside title='Top Categorías' data={CATEGORIES_DATA} type='tags' />
        </Aside>
      </Blog>
    </div>
  )
}
