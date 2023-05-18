import Markdown from 'markdown-to-jsx'

import CardAside from '@/components/Cards/CardAside'
import Article from '@/components/Sections/Article'
import Aside from '@/components/Sections/Aside'
import Blog from '@/components/Sections/Blog'
import Hero from '@/components/Sections/Hero'

import { getPostContent } from '@/utils/getPostContent'
import { getPostMetadata } from '@/utils/getPostMetadata'
import PostContents from '@/components/Cards/PostContents'

const CATEGORIES_DATA = [
  {
    slug: 'categories/react',
    title: 'React'
  },
  {
    slug: 'categories/nextjs',
    title: 'Next.js'
  },
  {
    slug: 'categories/nodejs',
    title: 'Node.js'
  },
  {
    slug: 'categories/css',
    title: 'CSS'
  },
  {
    slug: 'categories/animations',
    title: 'Animaciones'
  },
  {
    slug: 'categories/javascript',
    title: 'JavaScript'
  },
  {
    slug: 'categories/python',
    title: 'Python'
  },
  {
    slug: 'categories/sql',
    title: 'SQL'
  },
  {
    slug: 'categories/git',
    title: 'Git'
  },
  {
    slug: 'categories/java',
    title: 'Java'
  }
]

export const generateStaticParams = async () => {
  const posts = getPostMetadata()
  return posts.map(({ slug }) => ({ slug }))
}

export const generateMetadata = async ({ params }: any) => {
  const { data } = getPostContent(params.slug)
  return {
    title: data.title,
    description: data.subtitle
  }
}

export default function Page ({ params }: any) {
  const { slug } = params
  const { content, data } = getPostContent(slug)
  const postMetadata = getPostMetadata()

  return (
    <div>
      <Hero
        title={data.title}
        page='post'
        date={data.date}
        slug={slug}
      />
      <Blog>
        <Article>
          <Markdown>
            {content}
          </Markdown>
        </Article>
        <Aside>
          <CardAside title='Top Categorías' data={CATEGORIES_DATA} type='tags' />
          <CardAside title='Los más vistos' data={postMetadata} />
          <PostContents />
        </Aside>
      </Blog>
      <div style={{ height: '100vh' }}></div>
    </div>
  )
}
