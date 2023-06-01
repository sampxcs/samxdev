import { getPostMetadata } from '@/utils/getPostMetadata'

import styles from './page.module.css'

import CardAside from '@/components/Cards/CardAside'
import Aside from '@/components/Sections/Aside'
import Container from '@/components/Sections/Container'
import Feed from '@/components/Sections/Feed'
import Hero from '@/components/Sections/Hero'
import Particles from '@/components/Decorations/Particles'

// hola

export default function Home () {
  const postMetadata = getPostMetadata()

  return (
    <div>
      <div className={styles.bg}/>
      <Particles style={{ top: '0', left: '0' }} />
      <Hero
        header='samxdev'
        title='Explorando el Mundo Digital Un código a la vez'
        description='Aquí encontraras contenido sobre desarrollo, tegnología y programación tanto para los que esten aprendiendo como los que ya lleven un tiempo dentro del mundo IT.'
        page='home'
      />
      <Container>
        <Feed limit={4} link/>
        <Aside>
          <CardAside title='Los más vistos' data={postMetadata} />
        </Aside>
      </Container>
    </div>
  )
}
