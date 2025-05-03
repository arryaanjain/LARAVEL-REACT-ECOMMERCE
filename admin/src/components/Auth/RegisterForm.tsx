import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterForm: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Skip registration logic for now
    console.log("Register submitted:", { name, email, password });
    // On successful registration, redirect to login
    navigate("/login");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-10">
      <h2 className="text-2xl font-bold text-center mb-6">Admin Register</h2>
      {error && <div className="text-red-500 text-center mb-4">{error}</div>}
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
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
      <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">Register</button>
      <div className="text-center mt-4">
        <p>
          Already have an account?{" "}
          <a href="/login" className="text-blue-500">Login here</a>
        </p>
      </div>
    </form>
  );
};

export default RegisterForm;
