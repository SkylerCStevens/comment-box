import React, { Component } from 'react';
import './App.css';
import ThumbsUpDown from './Likes'
import Reply from './Reply'

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
      <div>
      <form onSubmit={e => this.handleSubmit(e)}>
      <input type="text" name="comment" value={comment} onChange={this.handleChange}/>
      <button type="submit">Comment</button>
      </form>
      {commentList.map((postComment, index) => (
        <div key={index} className="ml">
        <p className="inline">{postComment.comment}</p>
        <div key={index}>
        {<ThumbsUpDown />}
        </div>
        <button className="inline" value={index} onClick={this.removeItem}>Delete</button>
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
        )
      }
    }
    
    export default App;
