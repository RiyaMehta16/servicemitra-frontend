// src/pages/CreateBlogPage.jsx
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // import the styles for the editor
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateBlogPage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate(); // For redirection after blog creation

  const handleSubmit = async () => {
    if (!title || !content) {
      alert("Please provide both a title and content");
      return;
    }

    try {
      const newBlog = { title, content };
      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/blogs/create`,
        newBlog
      );
      navigate(`/blogs/${res.data.post._id}`); // Redirect to the newly created blog
    } catch (err) {
      console.error("Failed to create blog:", err);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-semibold mb-4">Create a New Blog</h2>
      <input
        type="text"
        placeholder="Blog Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-4 mb-4 border border-gray-300 rounded-md"
      />
      <ReactQuill value={content} onChange={setContent} className="mb-4" />
      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
      >
        Create Blog
      </button>
    </div>
  );
};

export default CreateBlogPage;
