import React from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import InputOption from "../InputOption/InputOption";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";

import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";

// { name, description, massage, photoUrl }


function Post({ name, description, massage, photoUrl }) {
  
  return (
    <div className="post">
      <div className="post_header">
        <Avatar />
        <div className="post_info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className="post_body">
        <p>{massage}</p>
      </div>

      <div className="post_buttons">
        <InputOption Icon={ThumbUpAltOutlinedIcon} title="Like" color="gray" />

        <InputOption Icon={ChatOutlinedIcon} title="Comment" color="gray" />

        <InputOption Icon={ShareOutlinedIcon} title="Share" color="gray" />

        <InputOption Icon={SendOutlinedIcon} title="Send" color="gray" />
      </div>
    </div>
  );
}

export default Post;
