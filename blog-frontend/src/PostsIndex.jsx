export function PostsIndex(props) {
  function truncate(string, length) {
    let ending = '...'
    if (string <= length) {
      return string
    } else {
      return string.substring(0, length - ending.length).trim() + ending
    }
  }

  return (
    <div id="posts-index" className="container">
      <h1>All posts</h1>

      {props.posts.map(post => (
        <div class="card border-dark mb-3">
          <div class="card-body">
            <h5 class="card-title">{post.title}</h5>
            <p class="card-text">{truncate(post.body,200)}</p>
            <button type="button" class="btn btn-primary" onClick={() => props.onSelect(post)}>Show Post</button>
          </div>
          <div class="card-footer text-muted">
            Posted at {new Date(post.created_at).toString()}
          </div>
        </div>
      ))}

    </div>
  );
}
