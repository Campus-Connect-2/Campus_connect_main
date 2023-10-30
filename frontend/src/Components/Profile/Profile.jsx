import React, { useEffect, useState } from 'react'
import "./Profile.css"
import ProfileStrength from './ProfileStrength'
import ProfilePictureModal from './ProfilePictureModal';
import InterestsModal from './InterestsModal';
import GoalsModal from './GoalsModal';
import UserProfile from './UserProfile';
import {auth} from "../../../Firebase/firebase"
import { useFirebase } from '../Context/FirebaseContext';


const Profile = () => {


  const { user,db } = useFirebase()
 if(!user){
  return (
    <>Please log in</>
  )
 }  

 const [isProfilePicModalOpen, setProfilePicOpen] = useState(false);
 const [isInterestsModalOpen, setInterestsOpen] = useState(false);
 const [isGoalsModalOpen, setGoalsOpen] = useState(false);





 

  return (
    <>
  {!user && <div>Please log in</div>}
    {user && <ProfileStrength/>}
    {user && <ProfilePictureModal 
    isOpen={isProfilePicModalOpen}   
    setOpen={setProfilePicOpen}
    />}
    {user && <InterestsModal
    isOpen={isInterestsModalOpen}
    setOpen={setInterestsOpen}/>}
    {user && <GoalsModal
    isOpen={isGoalsModalOpen}
    setOpen={setGoalsOpen}/>}

    {user && <UserProfile />}
    <div className='user-data-update'>
   <button onClick={()=>{
        setProfilePicOpen(true)
    }} className='update-button'> Update display picture</button>
    <button onClick={()=>{
        setInterestsOpen(true)
    }} className='update-button'>Update Interests</button>
    <button onClick={()=>{
        setGoalsOpen(true)
    }} className='update-button'>Update Goals</button>
    </div>
    </>

  )
}

export default Profile