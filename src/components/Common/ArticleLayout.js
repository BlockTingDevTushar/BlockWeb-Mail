import React, { Component } from 'react';
import Link from 'next/link';

const ArticleLayout = ({ post }) => {

  return (
        <div className="kblog">
            <div className="kblog-img">
                <a href={post.url} target="_blank">
                    <img src={'/'+ post.image} alt="blog image" className="img-fluid" />
                </a>
                <span>{post.date}</span>
            </div>
            <div className="kblog-text">
                {/* <div className="kblog-meta">
                    <Link href={post.url}><a><i className="fal fa-user-circle"></i> {post.user}</a></Link>
                    <Link href={post.url}><a><i className="fal fa-comments"></i> {post.comments}</a></Link>
                </div> */}
                <h3 className="kblog-text-title mb-20">
                    <a href={post.url} target="_blank">{post.title}</a>
                </h3>
                <div className="kblog-text-link">
                    <a href={post.url} target="_blank">{post.button} <i className="far fa-chevron-right"></i></a>
                </div>
            </div>
        </div>
  );
}

export default ArticleLayout;