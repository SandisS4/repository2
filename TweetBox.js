import React, { useState} from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@mui/material";

//import db from "./firebase";

function TweetBox() {
  //const [tweetMessage, setTweetMessage] = useState("");
  //const [tweetImage, setTweetImage] = useState("");

  //const sendTweet = (e) => {
   // e.preventDefault();

//raksta db input datus
 //   db.collection("posts").add({
    //  displayName: "Janis Spaidermens",
    //  username: "janisOK123",
   //   verified: true,
    //  text: tweetMessage,
   //  image: tweetImage,
   //  avatar:"",
  //  });

    //setTweetMessage("");
    //setTweetImage("");
 // };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="" />
          <input
           // onChange={(e) => setTweetMessage(e.target.value)}
           // value={tweetMessage}
            placeholder="What's happening?" type="text"
          />
        </div> 

        {<input
          //value={tweetImage}
         // onChange={(e) => setTweetImage(e.target.value)}
         // className="tweetBox__imageInput"
          placeholder="Enter image URL" type="text"
        />}

        <Button
         // onClick={sendTweet}
          //type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;