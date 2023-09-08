// App.js

import React from 'react';
import BlogList from './Components/Blog/Bloglist';
import New_Blog from './Components/Blog/New_Blog';
// import './App.css'; 

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
      {/* <BlogList blogs=
      {blogs} /> */}
      <New_Blog/>
    </div>
  );
};

export default App;
