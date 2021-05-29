import React from "react";
import "./feed.css";
import CreateIcon from "@material-ui/icons/Create";
import InputOption from "../InputOption/InputOption";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";


function Feed() {
  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed_input">
          <CreateIcon />
          <from>
            <input type="text" />
            <button className="btn" type="submit">Send</button>
          </from>
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
          <h4>post section comming soon </h4>
      </div>
    

    </div>
  );
}

export default Feed;