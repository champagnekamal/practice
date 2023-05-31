import React, { useState, useContext } from 'react';
import jsondata from './accounts.json';
import { useNavigate } from 'react-router-dom';
import Dashboard from './Dashboard';
import AuthContext from './AuthContext';

const Login = () => {
  const { isloggedin, setIsLoggedin } = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = jsondata.accounts.find(
      (account) => account.email === email && account.password === password
    );
    if (user) {
      console.log('user logged in');
      setEmail('');
      setPassword('');
      setLoginError('');
      setIsLoggedin(true); // <-- Fix the function name here
      navigate('/dashboard');
    } else {
      setLoginError('error');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
      </div>
      {loginError && <p>{loginError}</p>}
      <button type="submit">Log In</button>
    </form>
  );
};  

export default Login;
