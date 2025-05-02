import { useEffect, useState } from "react";
import axios from "../api/axios";
import { Link } from "react-router-dom";
import PageContainer from "../components/PageContainer";
import Header from "../components/design/Header";

const BlogListPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetchBlogs();
    checkAdminStatus();
  }, []);

  const fetchBlogs = async () => {
    try {
      const res = await axios.get(`/blogs`);
      setBlogs(res.data);
    } catch (err) {
      console.error("Failed to fetch blogs:", err);
    }
  };

  const checkAdminStatus = () => {
    const token = localStorage.getItem("token");
    setIsAdmin(!!token);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this blog?")) return;

    try {
      await axios.delete(`/blogs/${id}`);
      alert("Blog deleted successfully!");
      fetchBlogs();
    } catch (err) {
      console.error("Failed to delete blog:", err);
      alert("Failed to delete blog.");
    }
  };

  return (
    <PageContainer>
      <div className="py-8 px-4">
        <Header>Blogs</Header>
        <div className="flex flex-col gap-6">
          {blogs.length > 0 ? (
            blogs.map((blog) => (
              <div
                key={blog._id}
                className="border p-4 rounded shadow hover:shadow-lg transition"
              >
                {isAdmin ? (
                  <>
                    <h3 className="text-xl font-semibold">{blog.title}</h3>
                    <p
                      className="text-gray-700 mt-2"
                      dangerouslySetInnerHTML={{
                        __html: blog.content.substring(0, 30) + "...",
                      }}
                    ></p>

                    <div className="mt-2 flex gap-4">
                      <Link
                        to={`/blogs/edit/${blog._id}`}
                        className="btn-primary"
                      >
                        Edit Blog
                      </Link>
                      <button
                        onClick={() => handleDelete(blog._id)}
                        className="btn-danger"
                      >
                        Delete Blog
                      </button>
                    </div>
                  </>
                ) : (
                  // For normal users: blog is a clickable Link
                  <Link to={`/blogs/${blog._id}`} className="block">
                    <h3 className="text-xl font-semibold text-blue-600 underline">
                      {blog.title}
                    </h3>
                    <p
                      className="text-gray-700 mt-2"
                      dangerouslySetInnerHTML={{
                        __html: blog.content.substring(0, 30) + "...",
                      }}
                    ></p>
                  </Link>
                )}
              </div>
            ))
          ) : (
            <p className="text-center">No blogs available yet.</p>
          )}
        </div>
      </div>
    </PageContainer>
  );
};

export default BlogListPage;
