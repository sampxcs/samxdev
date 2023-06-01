import fs from 'fs'
import matter from 'gray-matter'

export const getPostContent = (slug: string) => {
  const file = `src/posts/${slug}.md`

  try {
    const content = fs.readFileSync(file, 'utf-8')
    const matterResult = matter(content)
    return matterResult
  } catch (error) {
    return { data: null, content: null }
  }
}
