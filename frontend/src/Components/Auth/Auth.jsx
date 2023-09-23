import { useState } from "react";
import {auth} from "../../../Firebase/firebase" 
import {createUserWithEmailAndPassword} from "firebase/auth"


export const Auth = () => {
   
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const Signup = async ()=>{
    try {
        await createUserWithEmailAndPassword(auth, email, password)
    } catch (error) {
        alert(error.message)
    }     
  }

  return (
    <>
      <div>
        <input placeholder="Email"
        onChange={(e)=>setEmail(e.target.value)}
        />
        <input placeholder="Password" type="password"
        onChange={(e)=>setPassword(e.target.value)}/>
        <button onClick={Signup}>Sign In</button>
      </div>
    </>
  );
};
