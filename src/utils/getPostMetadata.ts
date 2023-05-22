import fs from 'fs'
import matter from 'gray-matter'

export const getPostMetadata = () => {
  const files = fs.readdirSync('src/posts/')
  const markdownPosts = files.map((file) => file.replace('.md', ''))

  const posts = markdownPosts.map((fileName) => {
    const fileContent = fs.readFileSync(`src/posts/${fileName}.md`, 'utf-8')
    const matterResult = matter(fileContent)
    const { title, date, subtitle, tags } = matterResult.data
    return {
      title,
      date,
      subtitle,
      slug: fileName,
      tags
    }
  })

  return posts
}
