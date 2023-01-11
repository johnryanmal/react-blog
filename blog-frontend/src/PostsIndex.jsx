export function PostsIndex(props) {
  return (
    <div id="posts-index">
      <h1>All posts</h1>

      {props.posts.map(recipe => (
        <div key={recipe.id}>
          <h2>{recipe.title}</h2>
          <p>{recipe.body.length <= 200 ? recipe.body : recipe.body.substring(0, 200-3) + '...' }</p>
          <div><button onClick={() => props.onSelect(recipe)}>Show Post</button></div>
        </div>
      ))}

    </div>
  );
}
