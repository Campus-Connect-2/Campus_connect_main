// BlogList.js


/*
testing db
*/
import { auth, db } from '../../../Firebase/firebase'
import {getDocs, collection} from "firebase/firestore"

import React, {useState, useEffect} from 'react';
import "./Bloglist.css"
import Topics from './Topics';
import {CiSaveDown2} from 'react-icons/ci'


//fonts
import "@fontsource/montserrat"; 
import "@fontsource/montserrat/400.css"; 
import "@fontsource/montserrat/400-italic.css";
import { useNavigate} from 'react-router-dom';


import Recommendations from "./Recommendations/Recommendations"


const BlogList = () => {


/* testing db */
const navigate= useNavigate()
const [blogs, setBlogs] = useState([]);

const currentUser = auth?.currentUser;

const blogsCollection = collection(db, "blogs")



useEffect(()=>{
  const getBlogs= async()=>{      
       try {
        const data = await getDocs(blogsCollection)
        const res=data.docs.map((doc)=> (
          {
            ...doc.data(), id:doc.id
          }
        ))
        
         setBlogs(res)
       } catch (error) {
          alert(error)
       } 
  }

  getBlogs()
}, [])


const saveBlogToUserCollection = (blog) => {
 //to do
  
};


const handleBlogClick = (blogId) => {
  navigate(`/blogs/${blogId}`);
};


  return (
    <>
      <div className="write-first-blog">
        <p>Write your own blog</p>
        <div className='write-first-blog-desc'>From technical tutorials to startup experiences, dive into a world of insights and learning</div>
        <button
          className="write_blog"
          onClick={() => {
            navigate('../new_blog');
          }}
        >
          Write Blog ➔
        </button>
      </div>
 <div className="overall">
  <div className="lefty">
    <Topics/>
    
    <div className="blog-list">
      {blogs.map((blog, index) => (
        <div className="blog-item" key={index}
       
        >
        
          <div className="blog-right">
            <div className='credentials'   onClick={() => handleBlogClick(blog.uniqueid)}>
          
            <div className="blog-author">
              <img className="blog_author_img" src={`https://picsum.photos/${index*100}`}alt="" />
                {blog.author}
                </div>
                <div className='blog-title'>{blog.title}</div>               
            </div>
            <div className="blog-short-description">{blog.shortDescription}</div>
            <div className='meta_data_blog'>
              <div className="date">{blog.date}</div>
              <div className="length">
               {`${blog.readtime} min read`} 
              </div>
              <div className='save_blog' onClick={() => saveBlogToUserCollection(blog)}><CiSaveDown2/></div>
    {/*CiSaveDown2 */}        
            <div className="blog-tags">
              {blog.tags?.map((tag) => (
                <span className="tag">
                  {tag}
                </span>
              ))}
            </div>
            </div>
          
          </div>
          <div className="blog-left" onClick={() => handleBlogClick(blog.uniqueid)}>
            <img
              src={blog.image}
              alt={blog.title}
              className="blog-image"
            />
          </div>
        </div>
      ))}
     
      </div>
     
      </div>
      <div className="righty">
       <Recommendations/>
      </div>
    </div>
    </>
  );
};

export default BlogList;
