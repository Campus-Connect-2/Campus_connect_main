import React, { useEffect, useState } from "react";
import "./ProfileStrength.css";

import { useFirebase } from "../Context/FirebaseContext";
import { doc, collection, onSnapshot } from 'firebase/firestore';

const ProfileStrength = () => {

  const { user, db } = useFirebase();

  
  const [strength, setStrength] = useState(20);

  const usersCollection = collection(db, "users");
  console.log(user)
  const userDocRef = doc(usersCollection, user.uid);

  useEffect(() => {
    const unsubscribe = onSnapshot(userDocRef, (docSnapshot) => {
      if (docSnapshot.exists()) {
        const userData = docSnapshot.data();
      
        setStrength(calculateStrength(userData));
      }
    });

    return () => unsubscribe();
  }, [user, userDocRef]);

  const calculateStrength = (userData) => {
    let hasEmail = userData?.email ? 1 : 0;
    let hasName = userData?.name ? 1 : 0;
    let hasPicture = userData?.profilepic ? 1 : 0;
    let hasInterests = userData?.interests ? 1 : 0;
    let hasGoals = userData?.goals ? 1 : 0;

    let profileStrength = hasEmail * 10 + hasName * 10 + hasPicture * 30 + hasInterests * 25 + hasGoals * 25;

    return profileStrength;
  }
  const progressBarStyle = {
    width: `${strength}%`,
  };

  let progressBarColorClass = "";
  if (strength <= 33) {
    progressBarColorClass = "red"; 
  } else if (strength <= 66) {
    progressBarColorClass = "green";
  } else {
    progressBarColorClass = "orange"; 
  }

  let type = "";
  if (strength <= 33) {
    type = "Beginner"; 
  } else if (strength <= 66) {
    type = "Intermediate"; 
  } else if(strength<=100) {
    type = "Pro";  
  }
  else{
    type= "Loading..."
  }

  const TypeStyle = {
    color: progressBarColorClass,
    fontWeight:600,
    fontSize: "28px"
  };

  return (
    <>
    <div className="profile-judge">
   <h3>ProfileStrength</h3> 
      
   <h3 className= "profile-type"style={TypeStyle}>{type}</h3>
   </div>
    <div className={`progress-bar ${progressBarColorClass}`}>
      <div className="progress" style={progressBarStyle}></div>
      
    </div>

    </>
  );

};



export default ProfileStrength;
