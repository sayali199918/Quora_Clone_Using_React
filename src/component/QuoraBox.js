import React from 'react'
import '../Css/QuoraBox.css';
import { Avatar } from "@material-ui/core";

function QuoraBox() {
    return (
        <div className = "quoraBox">
        <div className ="quoraBox_info">
            <Avatar />
            <h5>Username</h5>
        </div>
      <div className ="quoraBox_quora">
          <p>What is your question or link</p>
      </div>
            
        </div>
    )
}

export default QuoraBox
