import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PostComments from './PostComments';

function PostItem({data}){
  return(
    <div className="post">
      <PostHeader author={data.author} date={data.date} />
      <p className="post-content">{data.content}</p>
      <PostComments comments={data.comments} />
    </div>
  )
}

function PostHeader({ author, date }) {
  return (
    <div className="post-header">
      <img className="avatar" src={author.avatar} />
      <div className="details">
        <span>{author.name}</span>
        <span>{date}</span>
      </div>
    </div>
  );
}

PostItem.propTypes = {
  data: PropTypes.object,
}

export default PostItem;