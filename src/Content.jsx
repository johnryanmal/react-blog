import { useState, useEffect } from "react";
import axios from "axios";
import { PostsNew } from "./PostsNew";
import { PostsIndex } from "./PostsIndex";
import { Modal } from "./Modal";
import { PostShow } from "./PostShow";
import { Signup } from "./Signup";
import { Login } from "./Login"
import { LogoutLink } from "./LogoutLink"

export function Content() {
  const [posts, setPosts] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalInfo, setModalInfo] = useState('')

  function handleIndexPosts() {
    axios.get("http://localhost:3000/posts.json").then((response) => {
      let data = response.data;
      setPosts(data);
    });
  }

  function handleShow(info) {
    setModalVisible(true)
    setModalInfo(info)
    console.log(info)
  }

  function handleHide() {
    setModalVisible(false)
  }

  useEffect(handleIndexPosts, []);
  
  return (
    <div>
      {/* <button onClick={handleIndexPosts}>handleIndexPosts()</button> */}
      <Signup/>
      <Login/>
      <LogoutLink/>
      <PostsNew/>
      <PostsIndex posts={posts} onSelect={handleShow}/>
      <Modal show={modalVisible} onClose={handleHide}>
        <PostShow post={modalInfo}></PostShow>
      </Modal>
    </div>
  );
}
