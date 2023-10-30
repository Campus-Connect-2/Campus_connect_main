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
    alert("creating user")
    try {
  
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

   console.log(userCredential);
      const user = userCredential.user;
      const userRef = doc(db, "users", user.uid);
      const userData = {
        email: user.email,
        name: name,
        college: college,
        profileStrength: 20
      };
      console.log(userData)
      await setDoc(userRef, userData);

      
      alert("Successfully signed up!");
      navigate("/blogs");
    } catch (error) {
      console.log("here")
      alert(error.message);
    }
  };

  return (
    <>
      <div>
     

            <input className="nameInput"
              type="text"
              name="Name"
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              // value={this.state.lastName}
              // onChange={this.handleChange}
              required
              style={{width:"60%", height:"6vh", borderRadius:"5px", border:"1px solid #757575", padding:"0.5vh", marginTop:"1vh", fontSize:"1.05rem", paddingLeft:"0.7vw"}}></input>
         
            <input className="emailInput" 
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            // value={this.state.email}
            // onChange={this.handleChange}
            required
            style={{width:"60%", height:"6vh", borderRadius:"5px", border:"1px solid #757575", padding:"0.5vh", marginTop:"2vh", fontSize:"1.05rem", paddingLeft:"0.7vw"}}></input>
           
            <input className="passwordInput" 
              type="password"
              name="password"
              placeholder="Password"
              // value={this.state.password}
              // onChange={this.handleChange}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{width:"60%", height:"6vh", borderRadius:"5px", border:"1px solid #757575", padding:"0.5vh", marginTop:"2vh", fontSize:"1.05rem", paddingLeft:"0.7vw"}}></input>
            <button type='submit' className='signUp' style={{marginTop:"1.5vh",border:"1px solid black", width:"10rem", height:"6vh", display:"flex", padding:"0.5vh", borderRadius:"5px", backgroundColor:"black", position:"relative", color:"white", fontWeight:"500",fontSize:"1rem", justifyContent:"center", alignItems:"center", cursor:"pointer"}}
            onClick={signup}
            >SIGNUP</button>
  
      </div>
    </>
  );
};
