import Card from "../../../Components/Cards"
import Link from "next/link"

export default async function PostCard() {
  let posts = []

  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    if (!res.ok) {
      throw new Error("Can't fetch the API")
    }
    posts = await res.json()
  } catch (error) {
    console.error(error.message)
  }

  return (
    <div>
      {posts.map((post) => (
        <Link href={`/postcards/posts/${encodeURIComponent(post.title)}`} key={post.it}>
          <Card 
            // key ={post.it}
            id={post.userId}
            title={post.title}
            body={post.body}
          />
        </Link>
      ))}
    </div>
  )
}
