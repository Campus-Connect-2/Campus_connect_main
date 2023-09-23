import React, { useEffect, useState } from 'react'
import { auth } from '../../../Firebase/firebase'
import { db } from '../../../Firebase/firebase'
import {getDocs, collection} from "firebase/firestore"

const LandingPage = () => {

  const [users, setUsers] = useState([]);

  const usersCollection = collection(db, "users")

  useEffect(()=>{
    const getUsers= async()=>{

         try {
          const data = await getDocs(usersCollection)
          const res=data.docs.map((doc)=> (
            {
              ...doc.data(), id:doc.id
            }
          ))
          console.log(res)
      
         } catch (error) {
            alert(error)
         }
       
    }

    getUsers()
  }, [])

  
  return (
    <>
    <div>hello {auth?.currentUser?.email}</div>
    </>
  )
}

export default LandingPage