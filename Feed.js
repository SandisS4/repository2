import React, { useState, useEffect } from "react";
import TweetBox from "./TweetBox";
import Post from "./Post";
import "./Feed.css";
//import db from "./firebase";



function Feed() {
  //const [posts, setPosts] = useState([]);

  

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Feed</h2>
      </div>

      <TweetBox />

      
        
          <Post
          displayName="Janis Spaidermens"
          username="janisOK123"
          verified={true}
          text="mana nedela in the nutshell"
          avatar=""
          image="https://media.giphy.com/media/NCPcywASJGggw/giphy.gif"
          />
          <Post
          displayName="Indulis Emsis"
          username="emsisTe"
          verified={true}
          text="Ir grūti būt politiķim...Ahhh"
          avatar=""
          image=""
          />
          <Post
          displayName="Anna Kanna"
          username="anNa222"
          verified={false}
          text="cats"
          avatar=""
          image="https://media.giphy.com/media/gSotjAQJmPTJm/giphy.gif"
          />
          <Post
          displayName="Anna Kanna"
          username="anNa222"
          verified={false}
          text="I dont like spiders"
          avatar=""
          image=""
          />
           <Post
          displayName="John Doe"
          username="JoIsMe7"
          verified={true}
          text="Where can I buy kvass and pelmeņi? If anyone can tell, call meeee"
          avatar=""
          image=""
          />
          <Post
          displayName="Rita Dita"
          username="vitarita7777"
          verified={false}
          text="Bērzaines novadā atslēgta elektrība!Bērzaines novadā atslēgta elektrība!Bērzaines novadā atslēgta elektrība!Bērzaines novadā atslēgta elektrība!Bērzaines novadā atslēgta elektrība!"
          avatar=""
          image=""
          />
          <Post
          displayName="Andris Betmens"
          username="andris65"
          verified={true}
          text="my favorite dayyyyyyyyyy"
          avatar=""
          image="https://media.giphy.com/media/lyq3LcSnaUND5jXcrv/giphy.gif"
          />
          <Post
          displayName="Jadviga Kapa"
          username="vecamiza8"
          verified={true}
          text="Kā lai tiek mājā no Brocēniem.Palīgā"
          avatar=""
          image=""
          />
        
      
    </div>
  );
}

export default Feed;





