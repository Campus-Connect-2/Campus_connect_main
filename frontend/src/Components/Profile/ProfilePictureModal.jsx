
import React, { useState } from "react";
import "./ProfilePictureModal.css"; // Import your CSS for styling


const ProfilePictureModal = ({ isOpen, onSave, setOpen }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = (e) => {
    const imageFile = e.target.files[0];
    setSelectedImage(imageFile);
  };

  const handleSave = () => {
    if (selectedImage) {
     
    }
    onClose();
  };

  const onClose= ()=>{
    setOpen(false)
  }

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
