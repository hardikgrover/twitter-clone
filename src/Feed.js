import React, { useEffect, useState } from "react";
import "./Feed.css";
import db from "./firebase";
import Post from "./Post";
import TweetBox from "./TweetBox";
function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((onSnapshot) => {
      setPosts(onSnapshot.docs.map((doc) => doc.data()));
    });
  }, []);
  console.log(posts);
  return (
    <div className="feed">
      <div className="feed_header">
        <h2>Home</h2>
      </div>
      <TweetBox></TweetBox>

      {posts.map((post) => (
        <Post
          displayName={post.displayName}
          verifed={post.verified}
          verfied={post.verifed}
          text={post.text}
          avatar={post.avatar}
          image={post.image}
          username={post.username}
        ></Post>
      ))}
    </div>
  );
}

export default Feed;
