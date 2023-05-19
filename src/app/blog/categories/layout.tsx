import CardAside from '@/components/Cards/CardAside'
import Input from '@/components/Forms/Input'
import Aside from '@/components/Sections/Aside'
import Blog from '@/components/Sections/Blog'
import Hero from '@/components/Sections/Hero'
import { getPostMetadata } from '@/utils/getPostMetadata'

export default function CategoriesLayout ({ children }: any) {
  const postMetadata = getPostMetadata()

  return (
    <div>
    <Hero
      title='Articulos por Categorias'
    />
    <Blog>
      {children}
      <Aside>
        <Input type='text' placeholder='Buscar' />
        <CardAside title='Top Categorías' data={postMetadata} type='tags' />
        <CardAside title='Los más vistos' data={postMetadata} />
      </Aside>
    </Blog>
  </div>
  )
}
