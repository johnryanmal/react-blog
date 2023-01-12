export function PostShow(props) {
  const post = props.post;

  return (
    <div>
      <h2>{post.title}</h2>
      <small>
        Posted at {new Date(post.created_at).toString()}<br />
        Updated at {new Date(post.updated_at).toString()}
      </small>
      <p>{post.body}</p>
      <img src={post.image} alt={post.image}></img>
    </div>
  );
}
