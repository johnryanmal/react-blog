import { useState, useEffect } from "react";
import axios from "axios";


function Header() {
  return (
    <header>
      <a href="#">Home</a> | <a href="#posts-index">All posts</a> | <a href="#posts-new">New post</a>
    </header>
  )
}

function Footer() {
  return (
    <footer>
      <p>Copyright 20XX</p>
    </footer>
  )
}

function PostsNew() {
  return (
    <div id="posts-new">
      <h1>New post</h1>
      <form method="GET">
        <div>Title: <input type="text" id="title"></input></div>
        <div>Body: <input type="text" id="body"></input></div>
        <div>Image: <input type="text" id="image"></input></div>
        <input type="submit"></input>
      </form>
    </div>
  )
}

function PostsIndex(props) {
  return (
    <div id="posts-index">
      <h1>All posts</h1>

      {props.posts.map(recipe => (
        <div key={recipe.id}>
          <h2>{recipe.title}</h2>
          <img src={recipe.image} alt={recipe.image}></img>
          <p>{recipe.body}</p>
        </div>
      ))}
        
    </div>
  )
}

function Content() {
  const [posts, setPosts] = useState([]);

  function handleIndexPosts() {
    axios.get("http://localhost:3000/posts.json").then((response) => {
      let data = response.data
      setPosts(data)
    })
  }

  useEffect(handleIndexPosts, [])
  
  return (
    <div>
      {/* <button onClick={handleIndexPosts}>handleIndexPosts()</button> */}
      <PostsNew/>
      <PostsIndex posts={posts}/>
    </div>
  )
}

function App() {
  return (
    <div>
      <p>header</p>
      <Header/>

      <p>content</p>
      <Content/>

      <p>footer</p>
      <Footer/>
    </div>
  );
}

export default App;