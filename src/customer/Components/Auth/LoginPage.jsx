import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePassword = (password) => {
    return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    let emailError = '';
    let passwordError = '';

    if (!email) {
      emailError = 'Email is required';
    } else if (!validateEmail(email)) {
      emailError = 'Please enter a valid email';
    }

    if (!password) {
      passwordError = 'Password is required';
    } else if (!validatePassword(password)) {
      passwordError = 'Password must be at least 6 characters long and contain both letters and numbers';
    }

    setErrors({ email: emailError, password: passwordError });

    if (!emailError && !passwordError) {
      // Perform login logic here
      console.log('Logged in with:', { email, password });
    }
  };

  return (
    <div className="container my-10 flex flex-col md:flex-row justify-between p-5 sm:px-36 bg-white">
      {/* Returning Customer Section */}
      <div className="w-full md:w-1/2 sm:pr-20 sm:border-r-2 mt-8 md:mt-0">
        <h2 className="text-4xl text-center mb-10 font-bold text-wwwbootscom-congress-blue">Returning customer</h2>
        <form className="mt-4" onSubmit={handleLogin}>
          <label className="block mb-2" htmlFor="email">
            Email address*
          </label>
          <input
            className={`w-full p-2 border rounded mb-2 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
            type="email"
            id="email"
            placeholder="email@address.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

          <label className="block mb-2" htmlFor="password">
            Password*
          </label>
          <input
            className={`w-full p-2 border rounded mb-2 ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}

          <div className="flex items-center mb-4">
            <input type="checkbox" id="remember" className="mr-2" />
            <label htmlFor="remember" className="">
              Remember me
            </label>
          </div>
          <button className="bg-wwwbootscom-congress-blue text-white p-2 rounded w-full hover:bg-btn-hover">
            Log in
          </button>
          <a href="#" className="hover:underline block text-right mt-2">
            Forgotten your password?
          </a>
        </form>
      </div>

      {/* New Customer Section */}
      <div className="w-full md:w-1/2 sm:pl-10 lg:ml-10 mt-8 md:mt-0">
        <h2 className="text-4xl text-center text-wwwbootscom-congress-blue mb-10 font-bold">New customer</h2>
        <p className="mt-4">
          Register for a Boots account to enjoy:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li className='mb-1'>Faster checkout</li>
          <li className='mb-1'>Easy order tracking</li>
          <li className='mb-1'>Offers sent directly to you</li>
          <li className='mb-1'>A favourites list to store all your essentials</li>
          <li className='mb-1'>Access to online clinics and medicines ordering</li>
        </ul>
        <Link to="/sign-up" className="bg-wwwbootscom-link-water text-wwwbootscom-congress-blue p-2 rounded w-full mt-10 hover:bg-btn-hover hover:text-white inline-block text-center">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Login;
