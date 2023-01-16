import axios from "axios";
import { useState } from "react";

export function PostShow(props) {
  const [post, setPost] = useState(props.post);
  const [errors, setErrors] = useState([])

  function handleUpdate(event) {
    let params = new FormData(event.target)
    event.preventDefault()
    event.target.reset()
    //console.log('params', Object.fromEntries(params))
    axios.patch(`http://localhost:3000/posts/${post.id}.json`, params)
    .then((response) => {
      let data = response.data
      //console.log(data)
      setPost(data)
      props.onUpdate(data)
    }).catch((error) => {
      let errors = error.response?.data?.errors ?? [error.response?.statusText]
      //console.log(errors)
      setErrors(errors)
    })
  }

  function handleDestroy(event) {
    console.log('delete')
    axios.delete(`http://localhost:3000/posts/${post.id}.json`)
    .then((response) => {
      let data = response.data
      console.log(data)
      props.onDestroy({id: post.id})
    }).catch((error) => {
      let errors = error.response?.data?.errors ?? [error.response?.statusText]
      console.log(errors)
      setErrors(errors)
    })
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <small>
        Posted at {new Date(post.created_at).toString()}<br />
        Updated at {new Date(post.updated_at).toString()}
      </small>
      <p>{post.body}</p>
      <img src={post.image} alt={post.image}></img>
      <h3>Edit Post</h3>
      <ul>
        {errors.map((error, index) => (
          <li key={index}>{error}</li>
        ))}
      </ul>
      <form method="GET" onSubmit={handleUpdate}>
        <div>Title: <input type="text" id="title" name="title" defaultValue={post.title}></input></div>
        <div>Body: <input type="text" id="body" name="body" defaultValue={post.body}></input></div>
        <div>Image: <input type="text" id="image" name="image" defaultValue={post.image}></input></div>
        <button type="submit">Update</button>
      </form>
      <button onClick={handleDestroy}>Delete</button>
    </div>
  );
}
