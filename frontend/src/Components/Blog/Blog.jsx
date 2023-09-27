import React from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../../../Firebase/firebase'
import {getDocs, collection} from "firebase/firestore"
import {useEffect, useState} from 'react'
import BlogComponent from './BlogComponent'

const Blog = () => {

  const [blog, setBlog] = useState({});

  const blogsCollection = collection(db, "blogs")
  
  const {id} = useParams()


  useEffect(()=>{
    const getBlogs= async()=>{
         
         try {
          const data = await getDocs(blogsCollection)
          const res=data.docs.map((doc)=> (
            {
              ...doc.data(), id:doc.id
            }
           
          ))
          
          let thisblog = res.find((blog) => blog.uniqueid === id);
           
           setBlog(thisblog)
         } catch (error) {
            alert(error)
         }
    console.log(blog)
       
    }

    getBlogs()
  }, [])
  
    

     if(!blog){
        return(
            <>Loading</>
        )
     }
      return (
       <BlogComponent blog={blog}/>
      );
}

export default Blog