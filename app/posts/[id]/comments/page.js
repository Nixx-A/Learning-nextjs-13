const dataComments = async (id) => {
  await new Promise(resolve => setTimeout(resolve, 3000))
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, { next: { revalidate: 60 } })
    .then(res => res.json())
}

export default async function Comments ({ params }) {
  const { id } = params
  const comments = await dataComments(id)
  return (
    <ul style={{ fontSize: '10px', background: '#212121' }}>
      {comments.map(comment => (
        <li key={comment.id}>
          <h2>{comment.name}</h2>
          <p>{comment.body}</p>
        </li>
      ))}
    </ul>
  )
}
