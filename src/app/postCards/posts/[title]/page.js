export default async function Cards({ params }) {
  const { title } = await params // Extract title from params

  // Fetch posts data
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json()

  // Find the specific post by matching the title
  const post = posts.find((post) => post.title === decodeURIComponent(title)) // Use decodeURIComponent to compare

  if (!post) {
    return <p>Post not found!</p>  // If no post matches the title
  }

  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </>
  )
}
