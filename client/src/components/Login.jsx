import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
const Login = () => {

  const { login } = useForm()
  console.log()
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const data = { email, password };
      const res = await axios.post('http://localhost:5000/auth/login', data);
      if (res.status === 200) {
        setSuccess(res.data.message);
        localStorage.setItem('token', res.data.data.token);
        navigate('/home');
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFB563]">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-[#A41623]">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[#918450]">
              Email
            </label>
            <input
              type="email"
              // {...login('email')}
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-[#F85E00] focus:border-transparent"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-[#918450]">
              Password
            </label>
            <input
              type="password"
              // {...login('password')}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-[#F85E00] focus:border-transparent"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-[#A41623] rounded-md hover:bg-[#F85E00] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F85E00]"
          >
            Login
          </button>
        </form>
        {success && <p className="text-sm text-center text-green-600">{success}</p>}
        <p className="text-sm text-center text-[#918450]">
          Don’t have an account? <a href="#" className="text-[#A41623] hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
