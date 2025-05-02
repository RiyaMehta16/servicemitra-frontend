import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "../api/axios";
import PageContainer from "../components/PageContainer";

const BlogDetailsPage = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlog();
  }, []);

  const fetchBlog = async () => {
    try {
      const res = await axios.get(`/blogs/${id}`);
      setBlog(res.data);
    } catch (err) {
      console.error("Failed to fetch blog:", err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <PageContainer>Loading...</PageContainer>;

  if (!blog) return <PageContainer>Blog not found.</PageContainer>;

  return (
    <PageContainer>
      <div className="py-8 px-4">
        <Link to="/blogs" className="btn my-4 ">
          &larr; Back to Blogs
        </Link>

        <h1 className="text-3xl font-bold mb-4 mt-10">{blog.title}</h1>

        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        ></div>
      </div>
    </PageContainer>
  );
};

export default BlogDetailsPage;
