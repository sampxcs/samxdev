import CardAside from '@/components/Cards/CardAside'
import Input from '@/components/Forms/Input'
import Aside from '@/components/Sections/Aside'
import Blog from '@/components/Sections/Blog'
import Feed from '@/components/Sections/Feed'
import Hero from '@/components/Sections/Hero'
import { getPostMetadata } from '@/utils/getPostMetadata'

const CATEGORIES_DATA = [
  {
    title: 'React'
  },
  {
    title: 'Next.js'
  },
  {
    title: 'Node.js'
  },
  {
    title: 'CSS'
  },
  {
    title: 'Animaciones'
  },
  {
    title: 'JavaScript'
  },
  {
    title: 'Python'
  },
  {
    title: 'SQL'
  },
  {
    title: 'Git'
  },
  {
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
      <div style={{ height: '100vh' }}></div>
    </div>
  )
}
