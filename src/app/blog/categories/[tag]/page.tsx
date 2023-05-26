import CardAside from '@/components/Cards/CardAside'
import Input from '@/components/Forms/Input'
import Aside from '@/components/Sections/Aside'
import Container from '@/components/Sections/Container'
import Feed from '@/components/Sections/Feed'
import { getPostMetadata } from '@/utils/getPostMetadata'

export const generateStaticParams = async () => {
  const posts = getPostMetadata()
  const dataTags = posts.map(({ tags }: any) => tags)
  const tags = Array.from(new Set(dataTags.flat().map((tag: any) => tag.title)))
  return tags.map(tag => ({ tag }))
}

export const generateMetadata = async ({ params }: any) => {
  const { tag } = params
  return {
    title: `Samxdev | ${decodeURI(tag)}`
  }
}

export default function CategoriesPage ({ params }: any) {
  const postMetadata = getPostMetadata()
  const { tag } = params

  return (
    <Container>
      <Feed filter={tag}/>
      <Aside>
        <Input type='text' placeholder='Buscar' />
        <CardAside title='Top Categorías' data={postMetadata} type='tags' />
        <CardAside title='Los más vistos' data={postMetadata} />
      </Aside>
    </Container>
  )
}
