import CardAside from '@/components/Cards/CardAside'
import Input from '@/components/Forms/Input'
import Aside from '@/components/Sections/Aside'
import Blog from '@/components/Sections/Blog'
import Feed from '@/components/Sections/Feed'
import Hero from '@/components/Sections/Hero'
import { getPostMetadata } from '@/utils/getPostMetadata'

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

export default function BlogPage () {
  const postMetadata = getPostMetadata()

  return (
    <div>
      <Hero
        header='Hola Mundo!'
        title='Explora mi Blog'
        page='blog'
      />
      <Blog>
        <Feed />
        <Aside>
          <Input type='text' placeholder='Buscar' />
          <CardAside title='Los más vistos' data={postMetadata} />
          <CardAside title='Top Categorías' data={CATEGORIES_DATA} type='tags' />
        </Aside>
      </Blog>
    </div>
  )
}
