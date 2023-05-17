import CardAside from '@/components/Cards/CardAside'
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

export default function Home () {
  return (
    <div >
      <Hero
        title='Soy Ian Rosales'
        subtitle='Desarrollador Full Stack'
        description='También escribo sobre el mundo IT en mi blog.'
        page='home'
      />
      <Blog>
        <Feed />
        <Aside>
          <CardAside title='Los más vistos' data={TRENDING_DATA} />
        </Aside>
      </Blog>
      <div style={{ height: '100vh' }}></div>
    </div>
  )
}
