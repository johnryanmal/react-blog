export function PostsIndex(props) {
  return (
    <div id="posts-index">
      <h1>All posts</h1>

      {props.posts.map(recipe => (
        <div key={recipe.id}>
          <h2>{recipe.title}</h2>
          <img src={recipe.image} alt={recipe.image}></img>
          {/* <p>{recipe.body}</p> */}
          <div><button onClick={() => props.onSelect(recipe.body)}>Show Post</button></div>
        </div>
      ))}

    </div>
  );
}
