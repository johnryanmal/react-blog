import { useState, useEffect } from "react";
import axios from "axios";
import { PostsNew } from "./PostsNew";
import { PostsIndex } from "./PostsIndex";

export function Content() {
  const [posts, setPosts] = useState([]);

  function handleIndexPosts() {
    axios.get("http://localhost:3000/posts.json").then((response) => {
      let data = response.data;
      setPosts(data);
    });
  }

  useEffect(handleIndexPosts, []);

  return (
    <div>
      {/* <button onClick={handleIndexPosts}>handleIndexPosts()</button> */}
      <PostsNew />
      <PostsIndex posts={posts} />
    </div>
  );
}
