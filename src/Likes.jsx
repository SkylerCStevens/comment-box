import React, { Component } from 'react';

const initialState = {
    upCount: 0,
    downCount: 0
}
class ThumbsUpDown extends Component {    
    state = {
        ...initialState
    }
    
    handleLikeChange = e => {
        console.log(e.target.value)
        if (e.target.value === "thumbsUp") {
            let thumbsUp = this.state.upCount +1
            this.setState({upCount: thumbsUp})
        }
        if (e.target.value === "thumbsDown") {
            let thumbsDown = this.state.downCount +1
            this.setState({downCount: thumbsDown})
        }
    }
    render() {
        const { upCount, downCount } = this.state
        return(
            <div>
            <button className="inline" value="thumbsUp" onClick={this.handleLikeChange}>Thumbs Up</button>
            <p className="inline">{upCount} people like this</p>
            <button className="inline" value="thumbsDown" onClick={this.handleLikeChange}>Thumbs Down</button>
            <p className="inline">{downCount} people dislike this</p>
            </div>
            )
        }
    }
    
    
    export default ThumbsUpDown;