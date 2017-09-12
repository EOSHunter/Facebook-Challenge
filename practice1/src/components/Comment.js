import React, { Component } from 'react';

class Comment extends Component {

	constructor(props) {
    super(props);
    this.state = {
    	text: "",
    	replies: [],
    	rating: 0
    }
  }

	render() {
		return (
			<div className="user-comment">
				<div className="reply-comment">
					<input className="comment" placeholder="Type your comment here."/>
		            <button className="btn-reply">Reply</button>
	            </div>
	            <p className="user-comment-text">{this.state.text}</p>
	            <button className="btn-like"><img src="https://emojipedia-us.s3.amazonaws.com/thumbs/120/emoji-one/104/thumbs-up-sign_1f44d.png" /></button>
	            <button className="btn-dislike"><img src="https://emojipedia-us.s3.amazonaws.com/thumbs/120/emoji-one/104/thumbs-down-sign_1f44e.png" /></button>
	            <button className="btn-delete">Delete</button>
			</div>
			)
	}
}

export default Comment;