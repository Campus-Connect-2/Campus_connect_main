import React from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../../../Firebase/firebase'
import {getDocs, collection} from "firebase/firestore"
import {useEffect, useState} from 'react'

const Blog = () => {

    const [blog, setBlog] = useState({});

  const blogsCollection = collection(db, "blogs")
  
  const {id} = useParams()
  console.log(id);

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
          let thisblog = res.find((blog) => blog.author === id);
           console.log(thisblog)
           setBlog(thisblog)
         } catch (error) {
            alert(error)
         }

       
    }

    getBlogs()
  }, [])
  
    

     if(!blog){
        return(
            <>Loading</>
        )
     }
      return (
        <div>
          <h>{blog.title}</h>
          <div dangerouslySetInnerHTML={{ __html: blog.content }} />
        </div>
      );
}

export default Blog