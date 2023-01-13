import axios from "axios";
import { useState } from "react";

export function PostsNew() {
  const [errors, setErrors] = useState([])

  function handleSubmit(event) {
    event.preventDefault()
    let formData = new FormData(event.target)
    axios.post("http://localhost:3000/posts.json")
    .then((response) => {
      console.log(response.data)
    }).catch((error) => {
      let errors = error.response?.data?.errors ?? [error.response?.statusText]
      console.log(errors)
      setErrors(errors)
    })
  }

  return (
    <div id="posts-new">
      <h1>New post</h1>
      <ul>
        {errors.map((error, index) => (
          <li key={index}>{error}</li>
        ))}
      </ul>
      <form method="GET" onSubmit={handleSubmit}>
        <div>Title: <input type="text" id="title" name="title"></input></div>
        <div>Body: <input type="text" id="body" name="body"></input></div>
        <div>Image: <input type="text" id="image" name="image"></input></div>
        <button type="submit">Post</button>
      </form>
    </div>
  );
}
