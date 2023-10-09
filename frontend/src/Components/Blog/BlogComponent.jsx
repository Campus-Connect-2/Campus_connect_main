import React from 'react';
import "./BlogComponent.css"

function BlogComponent({ blog }) {
  const containerStyle = {
    display: 'flex',
    background: "transparent",
    fontFamily:"Montserrat",
    flexDirection: 'column',
    alignItems: 'center',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    padding: '10px',
    borderRadius: '8px',
    backgroundColor: 'white',
    maxWidth: '90vw', 
    margin: 'auto', 
  };

  const headerStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
  };

  const imageStyle = {
    maxWidth: '55vw',
    maxHeight: '35vh',
    borderRadius: '8px',
    marginRight: '10px',
    
  };

  const authorInfoStyle = {
    flex: '1',
  };

  const tagsStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '10px',
  };

  const tagStyle = {
    backgroundColor: '#f2f2f2',
    padding: '4px 8px',
    margin: '4px',
    borderRadius: '4px',
  };

  const titleStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  

  return (
    <div className="outerblog" >
    <div className="top" style={containerStyle}>
      <div style={headerStyle}>
        <img src={blog.image} alt={blog.title} style={imageStyle} />
        <div style={authorInfoStyle}>
        <h2 style={titleStyle}>{blog.title}</h2>
          <p>Author: {blog.author}</p>
          <p> Created: {blog.date}</p>
          <div style={tagsStyle}>
            {blog.tags?.map((tag, index) => (
              <span key={index} style={tagStyle}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="horizontal-bar"></div>
     
      <div dangerouslySetInnerHTML={{ __html: blog.content }} />
    </div></div>
  );
}

export default BlogComponent;
