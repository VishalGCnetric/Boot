import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
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
    }

    setErrors({ email: emailError, password: passwordError });

    if (!emailError && !passwordError) {
      // Perform login logic here
      console.log('Logged in with:', { email, password });
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-between m-10 pr-36 pl-36 bg-white ">
      {/* Returning Customer Section */}
      <div className="w-full md:w-1/2 pr-10 border-r-2 mt-8 md:mt-0">
        <h2 className="text-2xl font-bold">Returning customer</h2>
        <form className="mt-4" onSubmit={handleLogin}>
          <label className="block mb-2 " htmlFor="email">
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
          <button className="bg-blue-600 text-white p-2 rounded w-full hover:bg-blue-700">
            Log in
          </button>
          <a href="#" className=" hover:underline block text-right mt-2">
            Forgotten your password?
          </a>
        </form>
      </div>

      {/* New Customer Section */}
      <div className="w-full md:w-1/2  pl-10 mt-8 md:mt-0">
        <h2 className="text-2xl font-bold">New customer</h2>
        <p className="mt-4 ">
          Register for a Boots account to enjoy:
        </p>
        <ul className="list-disc list-inside mt-2 ">
          <li>Faster checkout</li>
          <li>Easy order tracking</li>
          <li>Offers sent directly to you</li>
          <li>A favourites list to store all your essentials</li>
          <li>Access to online clinics and medicines ordering</li>
        </ul>
        <button className="bg-green-600 text-white p-2 rounded w-full mt-4 hover:bg-green-700">
          Register
        </button>
      </div>
    </div>
  );
};

export default Login;
