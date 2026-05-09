import React, { useState } from "react";

const LoginForm = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  // HANDLE INPUT
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // HANDLE SUBMIT LOGIN
  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    // simulasi loading sebentar
    setTimeout(() => {
      onLogin(formData.email, formData.password);
      setLoading(false);
    }, 800);
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg w-[400px]">
      <h1 className="text-2xl font-bold mb-6">
        Login
      </h1>

      <form onSubmit={handleSubmit}>
        {/* EMAIL */}
        <div className="mb-4">
          <label className="text-sm font-medium">
            Email
          </label>

          <input
            type="email"
            name="email"
            placeholder="Masukkan email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 mt-1"
            required
          />
        </div>

        {/* PASSWORD */}
        <div className="mb-6">
          <label className="text-sm font-medium">
            Password
          </label>

          <input
            type="password"
            name="password"
            placeholder="Masukkan password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 mt-1"
            required
          />
        </div>

        {/* BUTTON LOGIN */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition disabled:bg-gray-400"
        >
          {loading ? "Loading..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;