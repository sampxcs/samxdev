import Feed from '@/components/Sections/Feed'

export default function CategoriesPage ({ params }: any) {
  const { tag } = params

  return <Feed filter={tag}/>
}
