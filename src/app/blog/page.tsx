import Feed from '@/components/Sections/Feed'
import Hero from '@/components/Sections/Hero'

export default function BlogPage () {
  return (
    <div>
      <Hero
        title='Explora mi Blog'
        page='blog'
      />
      <Feed />
    </div>
  )
}
