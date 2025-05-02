import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../../api/axios"; // your axios instance
import RichTextEditor from "./RichTextEditor";
import Navbar from "../Navbar";

const BlogEditor = () => {
  const { id } = useParams(); // id is undefined if creating
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true); // Loading state

  const isEditing = !!id;

  useEffect(() => {
    if (isEditing) {
      fetchBlog();
    } else {
      setLoading(false); // No need to fetch if we're creating
    }
  }, [id]);

  const fetchBlog = async () => {
    try {
      const res = await axios.get(`/blogs/${id}`);
      setTitle(res.data.title);
      setContent(res.data.content);
      setLoading(false); // Data loaded
    } catch (err) {
      console.error("Failed to fetch blog:", err);
      alert("Failed to fetch blog details.");
      setLoading(false); // Stop loading even on error
    }
  };

  const handleSubmit = async () => {
    if (!token) {
      navigate("/login");
      return;
    }

    const blogData = { title, content };

    try {
      const headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      };

      if (isEditing) {
        await axios.put(`/blogs/${id}`, blogData, { headers });
        alert("Blog updated successfully!");
      } else {
        await axios.post(`/blogs/create`, blogData, { headers });
        alert("Blog created successfully!");
      }

      navigate("/blogs");
    } catch (err) {
      console.error("Error saving blog:", err);
      const errorMessage =
        err.response?.data?.message || "Something went wrong.";
      alert(errorMessage);
    }
  };

  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this blog?"
    );
    if (!confirmDelete) return;

    try {
      const headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      };

      await axios.delete(`/blogs/${id}`, { headers });
      alert("Blog deleted successfully!");
      navigate("/blogs");
    } catch (err) {
      console.error("Error deleting blog:", err);
      const errorMessage =
        err.response?.data?.message || "Failed to delete blog.";
      alert(errorMessage);
    }
  };

  if (loading) {
    return <div>Loading...</div>; // Show loading message until data is fetched
  }

  return (
    <div className="p-6 flex flex-col gap-4">
      <Navbar />
      <h1 className="text-2xl font-bold mt-20">
        {isEditing ? "Edit Blog" : "Create New Blog"}
      </h1>

      <input
        type="text"
        placeholder="Enter Blog Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="input"
      />

      <RichTextEditor value={content} onChange={setContent} />

      <div className="flex gap-4 mt-4">
        <button onClick={handleSubmit} className="btn-primary">
          {isEditing ? "Update Blog" : "Save Blog"}
        </button>

        {isEditing && (
          <button onClick={handleDelete} className="btn-danger">
            Delete Blog
          </button>
        )}
      </div>
    </div>
  );
};

export default BlogEditor;
