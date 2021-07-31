import React from 'react';
import '../Css/Post.css';
import { Avatar } from "@material-ui/core";
import ArrowUpwardOutlinedIcon from "@material-ui/icons/ArrowUpwardOutlined";
import ArrowDownwardOutlinedIcon from "@material-ui/icons/ArrowDownwardOutlined";
import RepeatOutlinedIcon from "@material-ui/icons/RepeatOutlined";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import { MoreHorizOutlined, ShareOutlined } from "@material-ui/icons";

function Post() {
    return (
        <div className = "post">
        <div className = "post_info">
        <Avatar />
        <h5>Username</h5>
        <small>Timestamp</small>
        </div>
        <div className = "post_body">
            <div className = "post_question">
                <p>Question</p>
                <button className ="post_btnAnswer">Answer</button>
            </div>
            <div className ="post_answer">
                <p> </p>
            </div>
            <img src ="https://qphs.fs.quoracdn.net/main-qimg-6c78ed5af6f4e0474a7fc413a75af20f"
            alt= " " />
        </div>
        <div className = 'post_footer'>
            <div className = "post_footerAction">
            <ArrowUpwardOutlinedIcon />
          <ArrowDownwardOutlinedIcon />
            </div>
            <RepeatOutlinedIcon />
        <ChatBubbleOutlineOutlinedIcon />
        <div className="post__footerLeft">
          <ShareOutlined />
          <MoreHorizOutlined />
        </div>
        </div>

        </div>
    );
}

export default Post
