import { getPostMetadata } from '@/utils/getPostMetadata'

import CardAside from '@/components/Cards/CardAside'
import Aside from '@/components/Sections/Aside'
import Blog from '@/components/Sections/Blog'
import Feed from '@/components/Sections/Feed'
import Hero from '@/components/Sections/Hero'




// Hola 2

export default function Home () {
  const postMetadata = getPostMetadata()

  return (
    <div >
      <Hero
        header='Hola Mundo!'
        title='Soy Ian Rosales'
        subtitle='Desarrollador Full Stack'
        page='home'
      />
      <Blog>
        <Feed limit={4} link/>
        <Aside>
          <CardAside title='Los más vistos' data={postMetadata} />
        </Aside>
      </Blog>
    </div>
  )
}
