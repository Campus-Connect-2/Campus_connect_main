import React, { useEffect, useState } from 'react'
import { auth } from '../../../Firebase/firebase'
import { db } from '../../../Firebase/firebase'
import {getDocs, collection} from "firebase/firestore"
// import {introImg} from '../../assets/landing_page/intro1.png';
import './LandingPage.css'


const LandingPage = () => {

  const [users, setUsers] = useState([]);

  const usersCollection = collection(db, "users")

  useEffect(()=>{
    const getUsers= async()=>{

         try {
          const data = await getDocs(usersCollection)
          const res=data.docs.map((doc)=> (
            {
              ...doc.data(), id:doc.id
            }
          ))
         
      
         } catch (error) {
            alert(error)
         }
       
    }

    getUsers()
  }, [])

  
  return (
    <div className='outer-landing' style={{width: "100vw", overflow: "none"}}>
    {/* <div>hello {auth?.currentUser?.email}</div> */}
    <section className="Intro" style={{width:"100%", height:"110vh", backgroundColor:"#242424"}}>
      <div className="intro-box" style={{width:"90%", height:"80%", display:"flex", justifyContent:"space-between", overflow:"hidden" ,alignItems:"center", top:"50vh", left:"50vw", position:"absolute", transform:"translate(-50%,-50%)"}}>
        <div className="introtext" style={{width:"35vw", height:"fit-content", backgroundColor:"white", borderRadius:"15px", marginTop:"8vh", marginLeft:"1vw", padding:"4vh 4vw"}}>
          <div className="introTitle" style={{fontWeight:"300", color:"black"}}>Lets Get You Started</div>
          <div className="formTitle" style={{fontWeight:"500",fontSize:"2em", color:"black", marginTop:"3vh"}}>Create an Account</div>
          <form className="form" style={{marginTop:"3vh", width:"100%", height:"fit-content", position:"relative"}}>
            <div className="nameInput" style={{width:"fit-content", height:"fit-content", backgroundColor:"white", position:"absolute", left:"1vw", fontSize:"0.9rem", color:"#757575"}}> Your Name </div>
            <input className="nameInput"
              type="text"
              name="Name"
              // placeholder="Last Name"
              // value={this.state.lastName}
              // onChange={this.handleChange}
              required
              style={{width:"100%", height:"6vh", borderRadius:"5px", border:"1px solid #757575", padding:"0.5vh", marginTop:"1vh", fontSize:"1.05rem", paddingLeft:"0.7vw"}}></input>
            <div className="emailInput" style={{width:"fit-content", height:"fit-content", backgroundColor:"white", position:"absolute", left:"1vw", fontSize:"0.9rem", color:"#757575", top:"8vh"}}> Email </div>
            <input className="emailInput" 
            type="email"
            name="email"
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
              required
              style={{width:"100%", height:"6vh", borderRadius:"5px", border:"1px solid #757575", padding:"0.5vh", marginTop:"2vh", fontSize:"1.05rem", paddingLeft:"0.7vw"}}></input>
            <button type='submit' className='signUp' style={{marginTop:"1.5vh",border:"1px solid black", width:"100%", height:"6vh", display:"flex", padding:"0.5vh", borderRadius:"5px", backgroundColor:"black", position:"relative", color:"white", fontWeight:"500",fontSize:"1rem", justifyContent:"center", alignItems:"center", cursor:"pointer"}}>GET STARTED</button>
          </form>
          <div className="break" style={{marginTop:"1.5vh",marginBottom:"1.5vh", display:"flex", justifyContent:"space-between", alignItems:"center"}}>

          <div className="line" style={{backgroundColor:"#E0E0E0", height:"1px", width:"40%"}}></div>
Or
          <div className="line" style={{backgroundColor:"#E0E0E0", height:"1px", width:"40%"}}></div>
          </div>
          <button className='googleSignUp' style={{border:"1px solid black", width:"100%", height:"6vh", display:"flex", padding:"0.5vh", borderRadius:"5px", backgroundColor:"white", position:"relative"}}></button>
          <button className='googleSignUp' style={{marginTop:"1.5vh",border:"1px solid black", width:"100%", height:"6vh", display:"flex", padding:"0.5vh", borderRadius:"5px", backgroundColor:"white", position:"relative"}}></button>
          <div className="loginText" style={{justifyContent:"center", display:"flex",marginTop:"1.5vh"}}>Already have an account?
          <a href="/signin" style={{color:"black",fontWeight:"500", marginLeft:"0.5vw"}}>LOGIN HERE</a>
          </div>
        </div>
        <div className="introimg" style={{width:"50vw", height:"40vw",
        //  backgroundColor:"#FFE8B6",
          borderRadius:"25px", position:"relative", justifyContent:"center", alignItems:"center", padding:"4vw"}}>
          {/* <Image src={introImg} style={{width:"100%", height:"100%", objectFit:"cover", zIndex:"10"}}/> */}
          <div className="introRightTitle" style={{display:"flex", flexDirection:"column", alignItems:"flex-end",  marginRight: "16vh"}}>
            <h1 style={{paddingTop: "18vh", color:"white", width:"100%", fontSize:"2rem", fontWeight:"bolder"}}>Reimagine colleges as hubs of <span style={{color:"#FFB2C1"}}>exploration</span>, <span style={{color:"#FFB800"}}>creativity</span>, and <span style={{color:"#00CBFE"}}>growth</span>.</h1>
            <h4 style={{color:"white", width:"40%", marginTop:"2vh", fontWeight:"lighter"}}>with Campus Connect</h4>
          </div>
          <img src={`https://drive.google.com/uc?id=1iS6iNzILFH0dBy6lkLFMmbDf91mt2rIn`} style={{width:"100%", height:"100%", objectFit:"cover", zIndex:"10"}}/>
          {/* <div className="image" style={{backgroundImage:require('../../assets/landing_page/intro1.png'), width:"100%", height:"100%"}}></div> */}
        </div>
      </div>
    </section>
      <div className="collaboration" style={{position:"absolute", top:"100vh", left:"10vw", width:"80%", height:"fit-content",display:"flex", flexDirection:"column", justifyContent:"space-between", alignItems:"center"}}>
        <div className="collabTitle" style={{fontWeight:"500",fontSize:"2em", color:"white", marginTop:"0vh"}}>Learn and Grow with people from</div>
        <div className="collabBox" style={{fontWeight:"300",height:"15vh", width:"100%",
        overflow:"none", backgroundColor:"#ECECEC", borderRadius:"15px", marginTop:"2vh", padding:"1.5vh", display:"flex", justifyContent:"space-between", alignItems:"center"}}>
          <img src='https://drive.google.com/uc?id=1t0-AhG00w_dqLIX5ChEN7oC8FuKapIkL' style={{objectFit:"cover", height:"80px", width:"auto"}}/>
          <img src='https://drive.google.com/uc?id=1add8MzGQnx6oiHSH9ymWM15g4VZJ3mWl' style={{objectFit:"cover",height:"80px", width:"auto"}}/>
          <img src='https://drive.google.com/uc?id=1IHErDOomEmcH87V-C-I_x3SIMFf6gjeF' style={{objectFit:"cover", height:"80px", width:"auto"}}/>
          <img src='https://drive.google.com/uc?id=102VZsrgGuv8xpy7Fsk8u1ePpL6ldQOLV' style={{objectFit:"cover",height:"80px", width:"auto"}}/>
          <img src='https://drive.google.com/uc?id=15-IUF2HLVGzlH658zRcGtzzMN8oXLt4M' style={{objectFit:"cover",height:"80px", width:"auto"}}/>
          <img src='https://drive.google.com/uc?id=1BQ89StAoGOhCyr9M7hnniRP7IqIatL-k' style={{objectFit:"cover", height:"80px", width:"auto"}}/>
          <img src='https://drive.google.com/uc?id=15Alz5cmMpJrHu4hE7ak69777WYHwEuJh' style={{objectFit:"cover",height:"80px", width:"auto"}}/>
          {/* <img src='https://drive.google.com/uc?id=181Ei7UiAa5O_cW7jILwjo3k2xlYxpial' style={{objectFit:"cover",height:"10vh", width:"auto"}}/> */}

        </div>
      </div>
    <section className="About" style={{width:"100%", height:"220vh", display:"flex", flexDirection:"column", justifyContent:"space-between", alignItems:"center"}}>
      <div className="stats" style={{width:"90%", position:"relative"}}>
        <div className="statsBox" style={{width:"100%", height:"fit-content", display:"flex", flexDirection:"column", marginTop: "10vw", alignItems:"center", backgroundColor:"#FFE8B6", borderRadius:"15px", boxShadow:"0px 5px 3px rgba(0, 0, 0, 0.3)"}}>
          <div className="statTitle" style={{fontWeight:"bolder", fontSize:"1.5rem",marginTop:"2vh" }}>Some numbers that matters</div>
          <div className="statsSubboxes" style={{height:"fit-content",padding:"2vh", width:"75%", display:"flex", justifyContent:"space-between", alignItems:"center", marginTop:"1vh"}}>
            <div className="statsSubBox"  style={{height:"18vh", width:"13vw", display:"flex", flexDirection:"column", justifyContent:"space-around", alignItems:"center", padding:"2vh", overflow:"hidden"
            //  backgroundColor:"#BBDDF5", borderRadius:"15px"
             }}>
              {/* img */}
              <img src='https://drive.google.com/uc?id=1FVY9xQIJbDK2LAGt6Zf0SsBhN69NgH-p' style={{objectFit:"cover", height:"10vh", width:"auto"}}/>
              <h1 style={{fontWeight:"bold", fontSize:"1.6rem"}}>2000+</h1>
              <h6 style={{fontWeight:"300", fontSize:"0.8rem"}}>Community Members</h6>
             </div>
            <div className="statsSubBox" style={{height:"18vh", width:"13vw", display:"flex", flexDirection:"column", justifyContent:"space-around", alignItems:"center", padding:"2vh", overflow:"hidden"
            //  backgroundColor:"#BBDDF5", borderRadius:"15px"
             }}>
              {/* img */}
              <img src='https://drive.google.com/uc?id=1jMaGnL6cPhWq1VsXnaAXFAIbv-I_8q8S' style={{objectFit:"cover", height:"10vh", width:"auto"}}/>
              <h1 style={{fontWeight:"bold", fontSize:"1.6rem"}}>150+</h1>
              <h6 style={{fontWeight:"300", fontSize:"0.8rem"}}>Universities Connected</h6>
             </div>
            <div className="statsSubBox" style={{height:"18vh", width:"13vw", display:"flex", flexDirection:"column", justifyContent:"space-around", alignItems:"center", padding:"2vh", overflow:"hidden"
            //  backgroundColor:"#BBDDF5", borderRadius:"15px"
             }}>
              {/* img */}
              <img src='https://drive.google.com/uc?id=17AzwwQPOb5ra0EN3Z9Tg6yL7Qgi9jQqv' style={{objectFit:"cover", height:"10vh", width:"auto"}}/>
              <h1 style={{fontWeight:"bold", fontSize:"1.6rem"}}>300+</h1>
              <h6 style={{fontWeight:"300", fontSize:"0.8rem"}}>Opportunities Listed</h6>
             </div>
            <div className="statsSubBox" style={{height:"18vh", width:"13vw", display:"flex", flexDirection:"column", justifyContent:"space-around", alignItems:"center", padding:"2vh", overflow:"hidden"
            //  backgroundColor:"#BBDDF5", borderRadius:"15px"
             }}>
              {/* img */}
              <img src='https://drive.google.com/uc?id=1636_ZAzFj4MiZDVxVBaKe_hFN5_S3ihm' style={{objectFit:"cover", height:"10vh", width:"auto"}}/>
              <h1 style={{fontWeight:"bold", fontSize:"1.6rem"}}>100+</h1>
              <h6 style={{fontWeight:"300", fontSize:"0.8rem"}}>Blogs Written</h6>
             </div>
          </div>
        </div>
      </div>
        <div className="feature1" style={{width:"100%", height:"30vh", backgroundColor:"rgba(0, 201, 184, 0.27)", borderRadius:"15px", boxShadow:"0px 5px 3px rgba(0, 0, 0, 0.3)", display:"flex",alignItems:"center"}}>
          <div className="feature1Left" style={{width:"60%", height:"100%", display:"flex", flexDirection:"column", justifyContent:"flex-start", alignItems:"flex-start", padding:"4vh"}}>
            <h1 style={{fontWeight:"bolder", fontSize:"2rem", color:"Black"}}><span style={{color:"rgba(238, 94, 84, 0.82)"}}>Learn</span> With Blogs</h1>
            <p style={{marginTop:"3vh",fontWeight:"lighter", fontSize:"1.2rem", color:"Black"}}>Unlock a treasure of knowledge and right information shared by students and experts. From technical tutorials to startup experiences, dive into a world of insights and learning.</p>
          </div>
          <div className="feature1Right" style={{width:"50%", height:"100%", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", padding:"4vh", paddingLeft:"0"}}>
             <img src='https://drive.google.com/uc?id=1xtr14dWhhsmWqaP-vk9p5tzBtS5qNEuC' style={{width:"100%", borderRadius:"15px", objectFit:"cover",boxShadow:"0px 5px 3px rgba(0, 0, 0, 0.3)"}}/></div>
        </div>
        <div className="feature1" style={{width:"100%", height:"30vh", backgroundColor:"rgba(238, 94, 84, 0.78)", borderRadius:"15px", boxShadow:"0px 5px 3px rgba(0, 0, 0, 0.3)", display:"flex",alignItems:"center"}}>
        <div className="feature1Left" style={{width:"60%", height:"100%", display:"flex", flexDirection:"column", justifyContent:"flex-start", alignItems:"flex-start", padding:"4vh"}}>
            <h1 style={{fontWeight:"bolder", fontSize:"2rem", color:"Black"}}>Find the Right <span style={{color:"#FFE8B6"}}>Partners</span></h1>
            <p style={{marginTop:"3vh",fontWeight:"lighter", fontSize:"1.2rem", color:"Black"}}>Connect with like-minded individuals and potential collaborators to turn your ideas into reality. Whether it's a startup, project, or research initiative, we help you find the perfect match.</p>
          </div>
          <div className="feature1Right" style={{width:"50%", height:"100%", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", padding:"4vh", paddingLeft:"0"}}>
             <img src='https://drive.google.com/uc?id=1PRrlFLY2baZmeu-oVJMvCiP2v4znh-cl' style={{width:"100%", borderRadius:"15px", objectFit:"cover",boxShadow:"0px 5px 3px rgba(0, 0, 0, 0.3)"}}/></div>

        </div>
        <div className="feature1" style={{width:"100%", height:"30vh", backgroundColor:"#FFE8B6", borderRadius:"15px", boxShadow:"0px 5px 3px rgba(0, 0, 0, 0.3)", display:"flex",alignItems:"center"}}>
        <div className="feature1Left" style={{width:"60%", height:"100%", display:"flex", flexDirection:"column", justifyContent:"flex-start", alignItems:"flex-start", padding:"4vh"}}>
            <h1 style={{fontWeight:"bolder", fontSize:"2rem", color:"Black"}}>Discover <span style={{color:"#437AFF"}}>Opportunities</span></h1>
            <p style={{marginTop:"3vh",fontWeight:"lighter", fontSize:"1.2rem", color:"Black"}}>Explore a vast array of opportunities, including exclusive internships , projects, and events. Broaden your horizons and grow both personally and professionally.</p>
          </div>
          <div className="feature1Right" style={{width:"50%", height:"100%", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", padding:"4vh", paddingLeft:"0"}}>
             <img src='https://drive.google.com/uc?id=1bQZzCwZwQM5joFb0kHtUvQCcXli2HpjU' style={{width:"100%", borderRadius:"15px", objectFit:"cover",boxShadow:"0px 5px 3px rgba(0, 0, 0, 0.3)"}}/></div>

        </div>
        <div className="feature1" style={{width:"100%", height:"30vh", backgroundColor:"rgba(165, 115, 189, 0.25)", borderRadius:"15px", boxShadow:"0px 5px 3px rgba(0, 0, 0, 0.3)", display:"flex",alignItems:"center"}}>
        <div className="feature1Left" style={{width:"60%", height:"100%", display:"flex", flexDirection:"column", justifyContent:"flex-start", alignItems:"flex-start", padding:"4vh"}}>
            <h1 style={{fontWeight:"bolder", fontSize:"2rem", color:"Black"}}><span style={{color:"rgba(0, 201, 184, 0.83)"}}>Network</span> with People</h1>
            <p style={{marginTop:"3vh",fontWeight:"lighter", fontSize:"1.2rem", color:"Black"}}>Connect with students and professionals from different colleges worldwide. Expand your network, exchange ideas, and build lifelong connections.</p>
          </div>
          <div className="feature1Right" style={{width:"50%", height:"100%", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", padding:"4vh", paddingLeft:"0"}}>
             <img src='https://drive.google.com/uc?id=1xy7wYu9dY4_ixpxJ5mmSUQSA_HKJBxEZ' style={{width:"100%", borderRadius:"15px", objectFit:"cover",boxShadow:"0px 5px 3px rgba(0, 0, 0, 0.3)"}}/></div>

        </div>

    </section>
     
    </div>
  )
}

export default LandingPage