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
        college: college,
        profileStrength: 20
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
     





<form className="form" style={{marginTop:"3vh", width:"100%", height:"fit-content", position:"relative"}}>
            <div className="nameInput" style={{width:"fit-content", height:"fit-content", backgroundColor:"white", position:"absolute", left:"1vw", fontSize:"0.9rem", color:"#757575"}}> Your Name </div>
            <input className="nameInput"
              type="text"
              name="Name"
              onChange={(e) => setName(e.target.value)}
              // placeholder="Last Name"
              // value={this.state.lastName}
              // onChange={this.handleChange}
              required
              style={{width:"100%", height:"6vh", borderRadius:"5px", border:"1px solid #757575", padding:"0.5vh", marginTop:"1vh", fontSize:"1.05rem", paddingLeft:"0.7vw"}}></input>
            <div className="emailInput" style={{width:"fit-content", height:"fit-content", backgroundColor:"white", position:"absolute", left:"1vw", fontSize:"0.9rem", color:"#757575", top:"8vh"}}> Email </div>
            <input className="emailInput" 
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            // placeholder="Email Address"
            // value={this.state.email}
            // onChange={this.handleChange}
            required
            style={{width:"100%", height:"6vh", borderRadius:"5px", border:"1px solid #757575", padding:"0.5vh", marginTop:"2vh", fontSize:"1.05rem", paddingLeft:"0.7vw"}}></input>
            <div className="passwordInput"style={{width:"fit-content", height:"fit-content", backgroundColor:"white", position:"absolute", left:"1vw", fontSize:"0.9rem", color:"#757575", top:"16vh"}}>Password</div>
            <input className="passwordInput" 
              type="password"
              name="password"
              // placeholder="Password"
              // value={this.state.password}
              // onChange={this.handleChange}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{width:"100%", height:"6vh", borderRadius:"5px", border:"1px solid #757575", padding:"0.5vh", marginTop:"2vh", fontSize:"1.05rem", paddingLeft:"0.7vw"}}></input>
            <button type='submit' className='signUp' style={{marginTop:"1.5vh",border:"1px solid black", width:"100%", height:"6vh", display:"flex", padding:"0.5vh", borderRadius:"5px", backgroundColor:"black", position:"relative", color:"white", fontWeight:"500",fontSize:"1rem", justifyContent:"center", alignItems:"center", cursor:"pointer"}}
            onClick={signup}
            >SIGNUP</button>
          </form>
      </div>
    </>
  );
};
