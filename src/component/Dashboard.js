import React from 'react'
import Navbar from './Navbar'
import { useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthContext from './AuthContext';


const Dashboard = () => {
  const { isloggedin } = useContext(AuthContext);
  const navigate = useNavigate();     
  useEffect(() => {
    if (!isloggedin) {  
      navigate('/');
    }
  }, [isloggedin, navigate]);

  if (!isloggedin) {
    return null;
  }
  return (
    <div>
      <Navbar/>
      Dashboard
    </div>
  )
}

export default Dashboard