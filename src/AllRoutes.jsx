import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsConditionsPage from "./pages/TermsConditionsPage";
import EmiCalculatorPage from "./pages/EmiCalculatorPage";
import ContactUsPage from "./pages/ContactUsPage";
import BlogListPage from "./pages/BlogListPage";
import LoginPage from "./pages/LoginPage"; // NEW - admin login page
import AdminDashboardPage from "./pages/AdminDashboardPage"; // NEW - admin dashboard
import BlogDetailsPage from "./pages/BlogDetailsPage";
import BlogEditor from "./components/blogs/BlogEditor";
const AllRoutes = () => {
  const isAuthenticated = !!localStorage.getItem("token");

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact-us" element={<ContactUsPage />} />
      <Route path="/emi-calculator" element={<EmiCalculatorPage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      <Route path="/terms-conditions" element={<TermsConditionsPage />} />
      {/* Public Blog List */}
      <Route path="/blogs" element={<BlogListPage />} />
      <Route path="/blogs/:id" element={<BlogDetailsPage />} />
      <Route path="/blogs/create" element={<BlogEditor />} />{" "}
      {/* Create New Blog */}
      <Route
        path="/blogs/edit/:id"
        element={<BlogEditor isEdit={true} />}
      />{" "}
      {/* Edit Blog */}
      {/* Admin Routes */}
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/admin"
        element={
          isAuthenticated ? <AdminDashboardPage /> : <Navigate to="/login" />
        }
      />
    </Routes>
  );
};

export default AllRoutes;
