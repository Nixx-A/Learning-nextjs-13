import { LikeButton } from './LikeButton'
import styles from '../styles/Posts.module.css'
import Link from 'next/link'

const getPosts = async () => {
  const request = await fetch('https://jsonplaceholder.typicode.com/posts')
  const res = await request.json()
  if (!request.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  return res
}

export async function ListOfPosts () {
  const posts = await getPosts()
  return (
    <section>
      {posts.slice(0, 10).map(post => (
        <article className={styles.post} key={post.id}>
          <Link href={`/posts/${post.id}`}>
            <h3 className={styles.title}>{post.title}</h3>
          </Link>
          <p>{post.body}</p>
          <LikeButton />
        </article>
      ))}
    </section>
  )
}
