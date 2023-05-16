import Card from '@/components/Cards/Card'
import Aside from '@/components/Sections/Aside'
import Blog from '@/components/Sections/Blog'
import Feed from '@/components/Sections/Feed'
import Hero from '@/components/Sections/Hero'

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
          <Card >
            <h1>aside</h1>
          </Card>
        </Aside>
      </Blog>
    </div>
  )
}
