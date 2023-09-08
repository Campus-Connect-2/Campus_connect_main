import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles

import './New_Blog.css'; // Import your custom CSS

const New_Blog = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  // Quill modules and formats for text formatting
  const modules = {
    toolbar: [
      [{ 'header': '1' }, { 'header': '2' }, 'bold', 'italic'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      ['link', 'image'],
    ],
  };

  return (
    <div className="blog-editor">
      <input
        className="editor-title"
        type="text"
        placeholder="Enter Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <ReactQuill
        theme="snow"
        value={content}
        onChange={setContent}
        modules={modules}
      />
      <button>Publish</button>
    </div>
  );
};

export default New_Blog;
