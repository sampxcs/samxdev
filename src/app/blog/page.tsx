import CardAside from '@/components/Cards/CardAside'
import Input from '@/components/Forms/Input'
import Aside from '@/components/Sections/Aside'
import Blog from '@/components/Sections/Blog'
import Feed from '@/components/Sections/Feed'
import Hero from '@/components/Sections/Hero'

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

export default function BlogPage () {
  return (
    <div>
      <Hero
        title='Explora mi Blog'
        page='blog'
      />
      <Blog>
        <Feed />
        <Aside>
          <Input type='text' placeholder='Buscar' />
          <CardAside title='Los más vistos' data={TRENDING_DATA} />
          <CardAside title='Top Categorías' data={CATEGORIES_DATA} type='tags' />
        </Aside>
      </Blog>
      <div style={{ height: '100vh' }}></div>
    </div>
  )
}
