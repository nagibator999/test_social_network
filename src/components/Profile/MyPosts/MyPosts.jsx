import React from "react";
import { AddPostActionCreator, AddSymbolNewPostActionCreator } from "../../../redux/profile-reducer";
import p from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPost = (props) => {
  debugger;
  let allPosts = props.myPosts.posts.map(p => <Post message={p.text} likeCount={p.likeCount} />)

  let addPost = () => {
    props.postChanged();
  }

  let onPostChange = () => {
    props.postChanged(newPostElement.current.value);
  }

  let newPostElement = React.createRef();

  return (
    <div className={p.postsBlock}>
      <div>
        <h3>My posts</h3>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} value={props.myPosts.newPostText} />
          <div>
            <button onClick={() => addPost()}>Add post</button>
            <button>Remove</button>
          </div>
        </div>

        <div className={p.content}>
          {allPosts}
        </div>
      </div>
    </div>
  )
}

export default MyPost