import React, { Component } from 'react';

function PostComments({ comments }) {
  return (
    <div className="post-comments">
      <div className="divider" />
      {comments.map(comment => (
        <Comment key={comment.id} comment={comment}/>
      ))}
    </div>
  );
}

function Comment({comment}){
  return(
    <div key={comment.id} className="comment">
    <img className="avatar" src={comment.author.avatar} />
    <p>
      <span>{comment.author.name}</span>
      {comment.content}
    </p>
  </div>
  )
}

export default PostComments;