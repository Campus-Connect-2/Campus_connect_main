import React, { useEffect, useState } from 'react';
import { auth, db } from '../../../Firebase/firebase'
import {getDocs, collection,  query, where } from "firebase/firestore"
import "./UserProfile.css"
import defaultDP from "./defualtDP.png"

function UserProfile() {

  const [user, setUser] = useState(null)
  const [blogs, setBlogs] = useState([])
  const [userdetails, setUserdetails] = useState(null)
  const blogsCollection = collection(db, "blogs")
   const usersCollection = collection(db, "users");

  useEffect(() => {

    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        
        setUser(currentUser);
      } else {
     
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    
    console.log(user)
    async function fetchUserData(user) {
        
        try {
          const blogsQuery = query(blogsCollection, where('authorId', '==', user?.uid));
      
          const data = await getDocs(blogsQuery);
         
          const res = data.docs.map((doc) => {
            const blogData = doc.data();
            
           return { title: blogData.title, desc: blogData.shortDesc}
          });
      
          return res
        } catch (error) {
          console.error('Error fetching blogs:', error);
        }
      }
      

      async function fetchUserDetails(uid) {
        try {
          console.log(user.email)
          let userQuery;
            userQuery = query(usersCollection, where('email', '==', user?.email));

          const userData = await getDocs(userQuery);
         console.log(usersCollection)
          if (!userData.empty) {
            const userDoc = userData.docs[0].data();
            setUserdetails(userDoc);
          } else {
            
            console.error('User data not found for UID: ', uid);
          }
        } catch (error) {
          console.error('Error fetching user details:', error);
        }
      }
      
      

      const blogsWrittenByUser = fetchUserData(user)
      setBlogs(blogsWrittenByUser);
      setTimeout(()=>{
        fetchUserDetails(user?.uid)
      }, 500)
      
      
  }, [user]);

  return (
    <div className="user-profile">
      <img className="profile-pic"
      src =  {userdetails?.profilepic ? 
        userdetails.profilepic :
        defaultDP
        }>
      </img>
      <div className="user-details">
        {userdetails?.name}
        <p>{user ? userdetails?.college: 'Loading' }</p>
      </div>
    </div>
  );
}

export default UserProfile;
