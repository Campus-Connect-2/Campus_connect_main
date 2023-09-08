// BlogList.js

import React from 'react';
import "./Bloglist.css"
import Topics from './Topics';
import {CiSaveDown2} from 'react-icons/ci'


//fonts
import "@fontsource/montserrat"; // Defaults to weight 400
import "@fontsource/montserrat/400.css"; // Specify weight
import "@fontsource/montserrat/400-italic.css"; // Specify weight and style

const BlogList = ({ blogs }) => {
  return (
    <>
    <h1>Blogs</h1>
    <Topics/>
    <button className='write_blog'>Write your own blog..</button>
    <div className="blog-list">
      {blogs.map((blog, index) => (
        <div key={blog.id} className="blog-item">
        
          <div className="blog-right">
            <div className='credentials'>
          
            <div className="blog-author">
              <img className="blog_author_img" src={`https://picsum.photos/${index*100}`}alt="" />
                {blog.author}
                </div>
                <div className='blog-title'>{blog.title}</div>               
            </div>
            <div className="blog-short-description">{blog.shortDescription}</div>
            <div className='meta_data_blog'>
              <div className="date">25th Jan</div>
              <div className="length">
                6 min read
              </div>
              <div className='save_blog'><CiSaveDown2/></div>
    {/*CiSaveDown2 */}        
            <div className="blog-tags">
              {blog.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
            </div>
          
          </div>
          <div className="blog-left">
            <img
              src={blog.imageUrl}
              alt={blog.title}
              className="blog-image"
            />
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default BlogList;
