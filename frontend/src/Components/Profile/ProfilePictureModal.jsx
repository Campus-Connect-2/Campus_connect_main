import React, { useEffect, useState } from "react";
import {auth, db}from "../../../Firebase/firebase";
import "firebase/storage";
import "./ProfilePictureModal.css";

import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getDocs, doc, collection, addDoc, setDoc } from 'firebase/firestore';

import {v4} from "uuid"





const ProfilePictureModal = ({ isOpen,  setOpen }) => {

  const user = auth.currentUser;
  const usersCollection = collection(db, 'users');
 
  const storage = getStorage();

  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    const imageFile = e.target.files[0];
    setImage(imageFile);
  };

  const handleSave = async () => {
    if (!image) return;

    try {
      
      try {
        const imageRef = ref(storage, `user_images/${image.name + v4()}`);
       
        await uploadBytes(imageRef, image);
       
        const imageUrl = await getDownloadURL(imageRef);
        

        const userDocRef = doc(usersCollection, user.uid);

        const updateData = {
          profilepic: imageUrl,
        };
        
        await setDoc(userDocRef, updateData, { merge: true });

        // window.location.reload();

      

      } catch (error) {
        alert(error);
        
        console.error(error);
      }
     

      onClose();
    } catch (error) {
      alert("Error uploading image:", error);
    }
  };

  const onClose = () => {
    setOpen(false);
  };



  return (
    <div className={`profile-picture-modal ${isOpen ? "open" : ""}`}>
      <div className="modal-content">
        <h2>Upload Profile Picture</h2>
        <input type="file" accept="image/*" onChange={handleImageUpload} />
        <button onClick={handleSave}>Save</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default ProfilePictureModal;
