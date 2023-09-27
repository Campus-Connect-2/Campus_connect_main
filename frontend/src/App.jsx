import React from 'react';

import {BrowserRouter as Router, Routes, Route, useParams} from "react-router-dom"

import BlogList from './Components/Blog/Bloglist';
import New_Blog from './Components/Blog/New_Blog';
import { Signup} from './Components/Auth/Signup';
import LandingPage from './Components/LandingPage/LandingPage'; 
import Blog from './Components/Blog/Blog';
import { SignIn } from './Components/Auth/Signin';
 

const App = () => {

  const blogs = [
    {
      id: 1,
      title: 'Moving towards Blockchain',
      imageUrl: 'https://picsum.photos/200',
      shortDescription: 'Short description of Blog 1 lorejfdsnqxijadsnxnIDJN IADSHMIjxmMdskxxndas',
      author: 'Somya',
      tags: ['Web3', 'Javascript'],
    },
    {
      id: 2,
      title: 'A roadmap to Consulting',
      imageUrl: 'https://picsum.photos/100',
      shortDescription: 'Short description of Blog 2',
      author: 'Sudeep',
      tags: ['Case studies', 'Markets'],
    },
    {
      id: 3,
      title: 'Competitive programming',
      imageUrl: 'https://picsum.photos/43',
      shortDescription: 'Short description of Blog 3',
      author: 'Somya',
      tags: ['DSA', 'Codeforces'],
    },
    // Add more blog objects here...
  ];

  return (
    <div className="App">
             <Router>
      <Routes>
        <Route index path="/" element={<LandingPage/>} />

        <Route path="/blogs" element={<BlogList blogs={blogs}/>} />

        <Route path="/new_blog" element={<New_Blog/>} />

      
        <Route path="/signup" element={<Signup/>} />
        <Route path="/signin" element={<SignIn/>} />
     <Route path="/blogs/:id" element={<Blog/>}/>
        {/* <Route path="/blog/:content" element={<Blog content={
          {
            content: useParams()
          }
        }/>} /> */}


      </Routes>
  </Router>
    </div>
  );
};

export default App;
