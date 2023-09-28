import React, { useEffect, useState } from 'react'
import "./Profile.css"
import ProfileStrength from './ProfileStrength'
import ProfilePictureModal from './ProfilePictureModal';
import InterestsModal from './InterestsModal';
import GoalsModal from './GoalsModal';
import UserProfile from './UserProfile';
import {auth} from "../../../Firebase/firebase"

const Profile = () => {

 

 const [isProfilePicModalOpen, setProfilePicOpen] = useState(false);
 const [isInterestsModalOpen, setInterestsOpen] = useState(false);
 const [isGoalsModalOpen, setGoalsOpen] = useState(false);

 const [user, setUser] = useState(auth.currentUser);




 useEffect(() => {

  const unsubscribe = auth.onAuthStateChanged((currentUser) => {
    if (currentUser) {
      
      setUser(currentUser);


      
    } else {
   
      setUser(null);
    }
  });

  // console.log(userData.ProfileStrength)

  return () => unsubscribe();

  
}, [user]);




 

  return (
    <>
  
    <ProfileStrength/>
    <ProfilePictureModal 
    isOpen={isProfilePicModalOpen}   
    setOpen={setProfilePicOpen}
    />
    <InterestsModal
    isOpen={isInterestsModalOpen}
    setOpen={setInterestsOpen}/>
    <GoalsModal
    isOpen={isGoalsModalOpen}
    setOpen={setGoalsOpen}/>

    <UserProfile />
    <button onClick={()=>{
        setProfilePicOpen(true)
    }}> Update display picture</button>
    <button onClick={()=>{
        setInterestsOpen(true)
    }}>Update Interests</button>
    <button onClick={()=>{
        setGoalsOpen(true)
    }}>Update Goals</button>
    </>

  )
}

export default Profile