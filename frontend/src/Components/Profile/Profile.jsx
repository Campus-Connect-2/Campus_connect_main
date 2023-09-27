import React, { useState } from 'react'
import "./Profile.css"
import ProfileStrength from './ProfileStrength'
import ProfilePictureModal from './ProfilePictureModal';
import InterestsModal from './InterestsModal';
import GoalsModal from './GoalsModal';
import UserProfile from './UserProfile';

const Profile = () => {

 

 const [isProfilePicModalOpen, setProfilePicOpen] = useState(false);
 const [isInterestsModalOpen, setInterestsOpen] = useState(false);
 const [isGoalsModalOpen, setGoalsOpen] = useState(false);
  return (
    <>
  
    <ProfileStrength profileStrength={90}/>
    <ProfilePictureModal 
    isOpen={isProfilePicModalOpen}     setOpen={setProfilePicOpen}/>
    <InterestsModal
    isOpen={isInterestsModalOpen}
    setOpen={setInterestsOpen}/>
    <GoalsModal
    isOpen={isGoalsModalOpen}
    setOpen={setGoalsOpen}/>

    <UserProfile/>
    <button onClick={()=>{
        setProfilePicOpen(true)
    }}>Add your display picture</button>
    <button onClick={()=>{
        setInterestsOpen(true)
    }}>Add your Interests</button>
    <button onClick={()=>{
        setGoalsOpen(true)
    }}>Add your Goals</button>
    </>

  )
}

export default Profile