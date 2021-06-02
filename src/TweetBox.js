import { Avatar, Button } from "@material-ui/core";
import React, { useState } from "react";
import db from "./firebase";
import "./TweetBox.css";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  console.log(tweetMessage);

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "Hardik Grover",
      username: "groverhardik",
      verfied: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://drive.google.com/file/d/1gJN6_zYhiMQhO9r6qR5ycZ4ksOPFpZ-U/view?usp=sharing",
    });

    setTweetMessage("");
    setTweetImage("");
  };
  return (
    <div className="tweetbox">
      <form>
        <div className="tweetbox_input">
          <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png"></Avatar>
          <input
            placeholder="Whats happening?"
            type="text"
            onChange={(e) => {
              setTweetMessage(e.target.value);
            }}
            value={tweetMessage}
          ></input>
        </div>
        <input
          className="tweetbox_inputImage"
          placeholder="Enter image url"
          onChange={(e) => {
            setTweetImage(e.target.value);
          }}
          value={tweetImage}
        ></input>

        <Button className="tweetbox_button" onClick={sendTweet}>
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
