import CardAside from '@/components/Cards/CardAside'
import Input from '@/components/Forms/Input'
import Aside from '@/components/Sections/Aside'
import Container from '@/components/Sections/Container'
import Feed from '@/components/Sections/Feed'
import Hero from '@/components/Sections/Hero'
import { getPostMetadata } from '@/utils/getPostMetadata'

export default function BlogPage () {
  const postMetadata = getPostMetadata()

  return (
    <div>
      <Hero
        header='Hola Mundo!'
        title='Explora mi Blog'
        description='Un viaje a través de la palabra escrita, un abanico de temas que te retarán, te informarán y te dejarán con ganas de más.'
        page='blog'
      />
      <Container>
        <Feed />
        <Aside>
          <Input type='text' placeholder='Buscar artículo...' role='search'/>
          <CardAside title='Los más vistos' data={postMetadata} />
          <CardAside title='Top Categorías' data={postMetadata} type='tags' />
        </Aside>
      </Container>
    </div>
  )
}
