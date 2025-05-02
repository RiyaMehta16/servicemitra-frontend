import { useState } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";
import PageContainer from "../components/PageContainer";

const LoginPage = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState("password"); // default active: password

  const navigate = useNavigate();

  const handlePasswordLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/admin/login", { password });
      localStorage.setItem("token", res.data.token);
      navigate("/admin");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  const requestOtp = async () => {
    try {
      await axios.post("/admin/request-otp", { email });
      setStep("enter-otp");
    } catch (err) {
      alert(err.response?.data?.message || "Failed to send OTP");
    }
  };

  const verifyOtp = async () => {
    try {
      const res = await axios.post("/admin/verify-otp", { email, otp });
      localStorage.setItem("token", res.data.token);
      navigate("/admin");
    } catch (err) {
      alert(err.response?.data?.message || "OTP verification failed");
    }
  };

  return (
    <PageContainer>
      <div className="flex relative flex-col items-center justify-center min-h-[75vh]">
        {/* Buttons always visible */}
        <div className="flex  gap-4 mb-8">
          <button
            onClick={() => setStep("password")}
            className={`btn ${
              step === "password" ? "bg-blue-500 text-white" : "bg-blue-300"
            }`}
          >
            Login with Password
          </button>
          <button
            onClick={() => setStep("email")}
            className={`btn ${
              step === "email" || step === "enter-otp"
                ? "bg-blue-500 text-white"
                : "bg-blue-300"
            }`}
          >
            Login with OTP
          </button>
        </div>

        {/* Forms */}
        {step === "password" && (
          <div className="flex flex-col gap-4 w-full max-w-xs">
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input"
            />
            <button
              onClick={handlePasswordLogin}
              className="btn bg-green-500 text-white"
            >
              Login
            </button>
          </div>
        )}

        {step === "email" && (
          <div className="flex flex-col gap-4 w-full max-w-xs">
            <input
              type="email"
              placeholder="Enter Admin Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input"
            />
            <button
              onClick={requestOtp}
              className="btn bg-green-500 text-white"
            >
              Send OTP
            </button>
          </div>
        )}

        {step === "enter-otp" && (
          <div className="flex flex-col gap-4 w-full max-w-xs">
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="input"
            />
            <button onClick={verifyOtp} className="btn bg-green-500 text-white">
              Verify OTP and Login
            </button>
          </div>
        )}

        {/* Go Back Button */}
        <div className="absolute top-4 left-4">
          <button onClick={() => navigate(-1)} className="btn">
            &larr; Go Back
          </button>
        </div>
      </div>
    </PageContainer>
  );
};

export default LoginPage;
