import React, { Component } from 'react';
import './App.css';
import ThumbsUpDown from './Components/Likes'
import Reply from './Components/Reply'

import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  state = {
    comments: "",
    commentList: [],
    reply: "",
    replyList: []
  }
  handleChange = e => {    
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  removeItem = (e, index) => {
    let newList = this.state.commentList
    newList.splice(e.target.value, 1)
    this.setState({ commentList: newList})
  }
  handleSubmit = e => {
    e.preventDefault()
    var temp = {}
    temp.id = this.state.commentList.length
    temp.comment = this.state.comment
    temp.replyList = []
    this.setState({
      commentList: [...this.state.commentList, temp]
    })
    this.setState({
      comment: ""
    })
  }
  handleReplyChange = e => {    
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  removeReply = (e, commentId, index) => {
    let commentList = this.state.commentList
    commentList[commentId].replyList.splice(e.target.value, 1) 
    
    this.setState({ 
      commentList
    })
  }
  
  handleReplySubmit = (e, commentId) => {
    const {commentList} = this.state
    e.preventDefault();
    console.log('commentId - ', commentId);
    commentList.map(comments => {
      if (comments.id === commentId) {
        comments.replyList.push(this.state.reply)
      }
    })
    console.log({commentList})
    this.setState({
      commentList,
      reply: ""
    })
  }
  render(){
    const {comment, commentList } = this.state
    
    return(
      <div className="first-comment">
      <form className="container" onSubmit={e => this.handleSubmit(e)}>
      <label className="hidden" htmlFor="comment">Comment:</label>
      <input className="comment-box" type="text" name="comment" value={comment} onChange={this.handleChange} placeholder="Leave a comment" id="comment" />
      <button className="btn btn-primary submit-btn ml-3" type="submit">Comment</button>
      </form>
      <div className="container">
      {commentList.map((postComment, index) => (
        <div key={index} className="ml comment-card">
        <p className="inline comment-text">{postComment.comment}</p>
        <div key={index}>
        {<ThumbsUpDown />}
        </div>
        <button className="inline btn btn-secondary mt-1" value={index} onClick={this.removeItem}>Delete</button>
        <ul className="replyList">
        {<Reply 
          commentId={postComment.id}
          replyList={postComment.replyList}
          handleReplySubmit={this.handleReplySubmit}
          handleReplyChange={this.handleReplyChange}
          removeReply={this.removeReply}
          />}
          </ul>
          </div>)
          )
        }
        </div>
        </div>
        )
      }
    }
    
    export default App;
