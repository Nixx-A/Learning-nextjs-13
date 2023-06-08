import Link from 'next/link'

const dataSinglePost = async (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { next: { revalidate: 60 } })
    .then(res => res.json())
}

export default async function PostLayout ({ params, children }) {
  const { id } = params
  const post = await dataSinglePost(id)
  return (
    <>
      <Link href='posts'>⬅️Back</Link>
      <marquee style={{ background: '#fff', color: 'violet' }}>Hello world :)</marquee>
      <p style={{ marginTop: '20px', color: 'violet' }}>posts number {id}</p>
      <h2 style={{ marginBottom: '12px' }}>{post.title}</h2>
      <p style={{ marginBottom: '20px' }}>{post.body}</p>
      <Link href={`/posts/${id}/comments`}>Ver comentarios</Link>
      {children}
    </>
  )
}
