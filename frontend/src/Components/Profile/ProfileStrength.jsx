import React from "react";
import "./ProfileStrength.css";

const ProfileStrength = ({ profileStrength }) => {
 
  const progressBarStyle = {
    width: `${profileStrength}%`,
  };

  let progressBarColorClass = "";
  if (profileStrength <= 33) {
    progressBarColorClass = "red"; 
  } else if (profileStrength <= 66) {
    progressBarColorClass = "green";
  } else {
    progressBarColorClass = "orange"; 
  }

  let type = "";
  if (profileStrength <= 33) {
    type = "Beginner"; 
  } else if (profileStrength <= 66) {
    type = "Intermediate"; 
  } else {
    type = "Pro";  
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
