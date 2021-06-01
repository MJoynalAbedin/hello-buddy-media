import React, { useState, useEffect } from "react";
import "./feed.css";
import CreateIcon from "@material-ui/icons/Create";
import InputOption from "../InputOption/InputOption";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import { db } from "../firebase.config";
import firebase from 'firebase';
import Post from "../Post/Post";


function Feed() {
  const [input, setInput] = useState('');
  const [posts, setPosts] = useState([]);
  console.log(posts);
  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(
        snapshot.docs.map((doc) => ({
         id: doc.id,
          data: doc.data()
        }))
      )
    );
  }, []);


  const sendPost = (e) => {

    

    db.collection("posts").add({
      name: "Shariar onim",
      description: "this is a test",
      massage: input,
      photoUrl: "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    e.preventDefault();
  };

  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed_input">
          <CreateIcon />
          <form className="form-section">
            <input className="feed-text" value={input} onChange={e => setInput(e.target.value)} type="text" />
            <button onClick={sendPost} className="feed-btn" type="submit">Send</button>
          </form>

        </div>
        <div className="feed_inputOptions">
          <InputOption Icon={ImageIcon} title="photo" color="#70B5F9" />

          <InputOption Icon={SubscriptionsIcon} title="video" color="#E7A33E" />

          <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />

          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write article"
            color="#7FC15E"
          />
        </div>
      </div>

      <div>
        {posts.map(({ id, data:{name, description, massage, photoUrl } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            massage={massage}
            photoUrl={photoUrl}
          ></Post>
        ))}

        <Post name='Shariar Onim'
          description='This is a  test'
          massage='Wow its work' />
      </div>


    </div>
  );
}

export default Feed;
