import { useNavigate } from "react-router-dom";
import PageContainer from "../components/PageContainer";

const AdminDashboardPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const handleCreateBlog = () => {
    navigate("/blogs/create"); // Navigate to blog creation page
  };
  const handleAllBlogs = () => {
    navigate("/blogs");
  };

  return (
    <PageContainer>
      <div className="flex flex-col  items-center py-8">
        <h2 className="text-2xl font-bold mb-6">Admin Dashboard</h2>

        <button
          onClick={handleCreateBlog}
          className="bg-green-500 w-96 text-white py-2 px-4 rounded mb-8"
        >
          Create New Blog
        </button>
        <button
          onClick={handleAllBlogs}
          className="bg-blue-500 w-96 text-white py-2 px-4 rounded mb-8"
        >
          All Blogs
        </button>

        <button
          onClick={handleLogout}
          className="bg-red-500 w-96 text-white py-2 px-4 rounded"
        >
          Logout
        </button>
      </div>
    </PageContainer>
  );
};

export default AdminDashboardPage;
