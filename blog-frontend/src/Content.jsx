import { useState, useEffect } from "react";
import axios from "axios";
import { PostsNew } from "./PostsNew";
import { PostsIndex } from "./PostsIndex";
import { Modal } from "./Modal";

export function Content() {
  const [posts, setPosts] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState('')

  function handleIndexPosts() {
    axios.get("http://localhost:3000/posts.json").then((response) => {
      let data = response.data;
      setPosts(data);
    });
  }

  function handleShow(info) {
    setModalVisible(true)
    setModalContent(info)
    console.log(info)
  }

  function handleHide() {
    setModalVisible(false)
  }

  useEffect(handleIndexPosts, []);
  
  return (
    <div>
      {/* <button onClick={handleIndexPosts}>handleIndexPosts()</button> */}
      <PostsNew />
      <PostsIndex posts={posts} onSelect={handleShow} />
      <Modal show={modalVisible} onClose={handleHide}>
        <p>{modalContent}</p>
      </Modal>
    </div>
  );
}
