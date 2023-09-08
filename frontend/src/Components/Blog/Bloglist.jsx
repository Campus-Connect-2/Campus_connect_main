// BlogList.js

import React from 'react';
import "./Bloglist.css"
import Topics from './Topics';

const BlogList = ({ blogs }) => {
  return (
    <>
    <h1>Blogs</h1>
    <Topics/>
    <button className='write_blog'>Write your own blog..</button>
    <div className="blog-list">
      {blogs.map((blog) => (
        <div key={blog.id} className="blog-item">
          <div className="blog-left">
            <img
              src={blog.imageUrl}
              alt={blog.title}
              className="blog-image"
            />
          </div>
          <div className="blog-right">
            <div className='credentials'>
                <div className='blog-title'>{blog.title}-</div>
                <div className="blog-author">
                {blog.author}
                </div>
            </div>
            <div className="blog-short-description">{blog.shortDescription}</div>
            
            <div className="blog-tags">
              {blog.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
            <button className="read-button">Read More</button>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default BlogList;
