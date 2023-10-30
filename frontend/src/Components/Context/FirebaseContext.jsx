import React, { createContext, useContext, useEffect, useState } from "react";
import {auth, db} from "../../../Firebase/firebase"
import "firebase/firestore";

const FirebaseContext = createContext();

export const useFirebase = () => {
  return useContext(FirebaseContext);
};

export const FirebaseProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        
        setUser(authUser);
      } else {
       
        setUser(null);
      }
    });

  
    return () => unsubscribe();
  }, []);

  return (
    <FirebaseContext.Provider value={{user, db}}>
      {children}
    </FirebaseContext.Provider>
  );
};
