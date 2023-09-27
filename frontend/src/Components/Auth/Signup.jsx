import { useState } from "react";
import { auth, db } from "../../../Firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom"; // Import useNavigate

export const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [college, setCollege] = useState("");
  const navigate = useNavigate();

  const signup = async () => {
    try {
  
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

   
      const user = userCredential.user;
      const userRef = doc(db, "users", user.uid);
      const userData = {
        email: user.email,
        name: name,
        college: college
      };
      await setDoc(userRef, userData);

      
      alert("Successfully signed up!");
      navigate("/blogs");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <div>
      <input
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
         <input
          placeholder="College"
          onChange={(e) => setCollege(e.target.value)}
        />
        <input
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={signup}>Sign Up</button>
      </div>
    </>
  );
};
