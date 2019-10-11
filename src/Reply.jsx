import React, { Component } from 'react';
import ThumbsUpDown from './Likes'
import './App.css';

const Reply = (props) => {
    
    const { 
        commentId,
        replyList,
        handleReplyChange,
        handleReplySubmit,
        removeReply,
    } = props;
    
    return(
        <div>
        <form onSubmit={e => handleReplySubmit(e,commentId)}>
        <input type="text" name="reply" onChange={handleReplyChange}/>
        <button>Reply</button>
        </form>
        {replyList.map((postReply, index) => (
            <li className="replyList" key={index} >
            <p className="inline">{postReply}</p>
            {<ThumbsUpDown />}
            <button className="inline" value={index} onClick={(e) => removeReply(e, commentId)}>Delete</button>
            </li>)
            )
        }
        </div>
        )
    }
    
    export default Reply;