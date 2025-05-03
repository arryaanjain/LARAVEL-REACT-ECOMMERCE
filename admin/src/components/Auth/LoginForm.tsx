import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, we skip tokenization logic for now and just simulate navigation
    console.log("Login submitted:", { email, password });
    // On successful login, redirect to dashboard
    navigate("/dashboard");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-10">
      <h2 className="text-2xl font-bold text-center mb-6">Admin Login</h2>
      {error && <div className="text-red-500 text-center mb-4">{error}</div>}
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-sm">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <button type="submit" onClick={handleSubmit} className="w-full bg-blue-500 text-white py-2 rounded">Login</button>
      <div className="text-center mt-4">
        <p>
          Don't have an account?{" "}
          <a href="/register" className="text-blue-500">Register here</a>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
