// Taletso Pabale-u25163885

export const useStrapi = () => {
  const config = useRuntimeConfig()
  const strapiUrl = config.public.strapiUrl || 'http://localhost:1337'

  const fetchPosts = async () => {
    try {
      const response = await fetch(`${strapiUrl}/api/posts`)
      const data = await response.json()
      console.log('Fetched posts:', data.data.length)
      return data.data || []
    } catch (error) {
      console.error('Error fetching posts:', error)
      return []
    }
  }

  const fetchPostBySlug = async (slug) => {
    try {
      console.log('Fetching post with slug:', slug)
      const response = await fetch(`${strapiUrl}/api/posts`)
      const data = await response.json()
      const post = data.data.find(post => post.Slug === slug)
      console.log('Found post:', post)
      return post || null
    } catch (error) {
      console.error('Error fetching post by slug:', error)
      return null
    }
  }

  return {
    fetchPosts,
    fetchPostBySlug
  }
}