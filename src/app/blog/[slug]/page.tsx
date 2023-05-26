import Markdown from 'markdown-to-jsx'

import CardAside from '@/components/Cards/CardAside'
import Article from '@/components/Sections/Article'
import Aside from '@/components/Sections/Aside'
import Container from '@/components/Sections/Container'
import Hero from '@/components/Sections/Hero'

import { getPostContent } from '@/utils/getPostContent'
import { getPostMetadata } from '@/utils/getPostMetadata'
import PostContents from '@/components/Cards/PostContents'
import PreCode from '@/components/Elements/PreCode'

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
      <Container>
        <Article tags={data.tags}>
          <Markdown
            options={{
              overrides: {
                pre: {
                  component: PreCode,
                  props: {
                    className: 'foo'
                  }
                }
              }
            }}
          >
            {content}
          </Markdown>
        </Article>
        <Aside>
          <CardAside title='Top Categorías' data={postMetadata} type='tags' />
          <CardAside title='Los más vistos' data={postMetadata} />
          <PostContents />
        </Aside>
      </Container>
    </div>
  )
}
