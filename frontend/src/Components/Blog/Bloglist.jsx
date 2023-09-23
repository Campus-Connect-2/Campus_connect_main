// BlogList.js


/*
testing db
*/
import { db } from '../../../Firebase/firebase'
import {getDocs, collection} from "firebase/firestore"

import React, {useState, useEffect} from 'react';
import "./Bloglist.css"
import Topics from './Topics';
import {CiSaveDown2} from 'react-icons/ci'


//fonts
import "@fontsource/montserrat"; 
import "@fontsource/montserrat/400.css"; 
import "@fontsource/montserrat/400-italic.css";
import { Navigate, useNavigate } from 'react-router-dom';


const BlogList = () => {


/* testing db */
const navigate= useNavigate()
const [blogs, setBlogs] = useState([]);

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
        console.log(res)
         setBlogs(res)
       } catch (error) {
          alert(error)
       }

     
  }

  getBlogs()
}, [])



  return (
    <>
    <h1>Blogs</h1>
    <Topics/>
    <button className='write_blog'>Write your own blog..</button>
    <div className="blog-list">
      {blogs.map((blog, index) => (
        <div className="blog-item">
        
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
              {blog.tags?.map((tag) => (
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
