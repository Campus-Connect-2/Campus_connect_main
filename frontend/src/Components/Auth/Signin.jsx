import React, { useState } from "react";
import { auth } from "../../../Firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      // Sign in with email and password
      await signInWithEmailAndPassword(auth, email, password);

      // Navigate to the desired page after successful sign-in (e.g., /blogs)
      navigate("/blogs");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <h2>Sign In</h2>




     
        
            <input className="emailInput" 
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            // placeholder="Email Address"
            // value={this.state.email}
            // onChange={this.handleChange}
            required
            style={{width:"60%", height:"6vh",
            margin:"auto", borderRadius:"5px", border:"1px solid #757575", padding:"0.5vh", marginTop:"2vh", fontSize:"1.05rem", paddingLeft:"0.7vw"}}></input>
        
            <input className="passwordInput" 
              type="password"
              name="password"
              placeholder="Password"
              // value={this.state.password}
              // onChange={this.handleChange}
              value={password}
          onChange={(e) => setPassword(e.target.value)}
              required
              style={{width:"60%", height:"6vh", borderRadius:"5px", border:"1px solid #757575", padding:"0.5vh", marginTop:"2vh", fontSize:"1.05rem", paddingLeft:"0.7vw"}}></input>
            <button type='submit' className='signUp' style={{marginTop:"1.5vh",border:"1px solid black", width:"10rem", height:"6vh", display:"flex", padding:"0.5vh", borderRadius:"5px", backgroundColor:"black", position:"relative", color:"white", fontWeight:"500",fontSize:"1rem", justifyContent:"center", alignItems:"center", cursor:"pointer"}}
          onClick={handleSignIn}
            >SIGNIN</button>
    </div>
  );
};
