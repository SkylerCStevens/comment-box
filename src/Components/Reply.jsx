import React from 'react';
import ThumbsUpDown from './Likes'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';

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
        <label className="hidden" htmlFor="reply">Reply:</label>
        <input className="reply-box" type="text" name="reply" onChange={handleReplyChange} placeholder="Reply" id="reply"/>
        <button className="btn btn-primary ml-3">Reply</button>
        </form>
        {replyList.map((postReply, index) => (
            <li className="replyList" key={index} >
            <p className="inline reply-text">{postReply}</p>
            {<ThumbsUpDown />}
            <button className="mt-2 btn btn-secondary" value={index} onClick={(e) => removeReply(e, commentId)}>Delete</button>
            </li>)
            )
        }
        </div>
        )
    }
    
    export default Reply;