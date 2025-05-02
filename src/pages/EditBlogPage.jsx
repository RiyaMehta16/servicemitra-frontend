// src/pages/EditBlogPage.jsx
import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const EditBlogPage = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/api/blogs/${id}`
        );
        setTitle(res.data.title);
        setContent(res.data.content);
      } catch (err) {
        console.error("Failed to fetch blog:", err);
      }
    };
    fetchBlog();
  }, [id]);

  const handleSave = async () => {
    try {
      const updatedBlog = { title, content };
      await axios.put(
        `${import.meta.env.VITE_BASE_URL}/api/blogs/${id}`,
        updatedBlog
      );
      navigate(`/blogs/${id}`); // Redirect to the updated blog page
    } catch (err) {
      console.error("Failed to update blog:", err);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-semibold mb-4">Edit Blog</h2>
      <input
        type="text"
        placeholder="Blog Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-4 mb-4 border border-gray-300 rounded-md"
      />
      <ReactQuill value={content} onChange={setContent} className="mb-4" />
      <button
        onClick={handleSave}
        className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
      >
        Save Changes
      </button>
    </div>
  );
};

export default EditBlogPage;
