import Feed from '@/components/Sections/Feed'
import { getPostMetadata } from '@/utils/getPostMetadata'

export const generateStaticParams = async () => {
  const posts = getPostMetadata()
  return posts.map(({ tag }) => ({ tag }))
}

export const generateMetadata = async ({ params }: any) => {
  const { tag } = params
  return {
    title: `Samxdev | ${tag}`
  }
}

export default function CategoriesPage ({ params }: any) {
  const { tag } = params

  return <Feed filter={tag}/>
}
