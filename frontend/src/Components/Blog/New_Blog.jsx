import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DOMPurify from 'dompurify';
import { auth } from '../../../Firebase/firebase';
import { db } from '../../../Firebase/firebase';
import { storage } from '../../../Firebase/firebase';

import {ref} from "firebase/storage";

import { getDocs, collection, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import './New_Blog.css';

const New_Blog = () => {
  const blogsCollection = collection(db, 'blogs');
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState('');
  const [image, setImage] = useState(null);

  const modules = {
    toolbar: [
      [{ 'header': '1' }, { 'header': '2' }, 'bold', 'italic'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      ['link', 'image'],
    ],
  };

  const handleAddTag = () => {
    if (tags.length < 3 && tagInput.trim() !== '') {
      setTags([...tags, tagInput.trim()]);
      setTagInput('');
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    const updatedTags = tags.filter((tag) => tag !== tagToRemove);
    setTags(updatedTags);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const Publish = async () => {
    setContent(DOMPurify.sanitize(content));
    if (!auth || !auth.currentUser) {
      console.log('unsigned');
      alert('Please sign in to publish your blog');
      return;
    }
    try {
      const desc = content.match(/\b\w+\b/g);
      const blogData = {
        title: title,
        content: content,
        author: auth?.currentUser?.email,
        tags: tags,
        shortDescription:desc.slice(0,10).join(' ')
      };

      
      if (image) {
        const storageRef = storage.ref();
        const imageRef = storageRef.child(`blog_images/${image.name}`);
        await imageRef.put(image);
        const imageUrl = await imageRef.getDownloadURL();
        blogData.image = imageUrl;
      }

      await addDoc(blogsCollection, blogData);
    } catch (error) {
      console.log(error);
    }
    navigate('../blogs');
  };

  return (
    <div className="blog-editor">
      <button className="publish-button" onClick={Publish}>
        Publish
      </button>
      <h1> {auth?.currentUser?.email}</h1>
      <div className="image-upload">
        <label htmlFor="imageInput">Add an Image for the Blog</label>
        <input
          type="file"
          id="imageInput"
          accept="image/*"
          onChange={handleImageUpload}
        />
      </div>
      <input
        className="editor-title"
        type="text"
        placeholder="Enter Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <ReactQuill theme="snow" value={content} onChange={setContent} modules={modules} />
      <input
        className="tag-input"
        type="text"
        placeholder="Add Tag"
        value={tagInput}
        onChange={(e) => setTagInput(e.target.value)}
      />
      <button className="add-tag-button" onClick={handleAddTag}>
        Add Tag
      </button>
      <div className="tags-container">
        {tags.map((tag, index) => (
          <div key={index} className="tag">
            {tag}
            <span className="remove-tag" onClick={() => handleRemoveTag(tag)}>
            ✖️
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default New_Blog;
