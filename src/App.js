import React, {useState} from 'react';
import List from './component/List';

import Login from './component/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './component/Dashboard';
import AuthContext from './component/AuthContext';
import { AuthProvider } from '../src/component/AuthContext';


function App() {
  const [isloggedin, setIsLoggedin] = useState(false);
  
  const handleLogin = () => {
    setIsLoggedin(true);
  };

  const handleLogout = () => {
    setIsLoggedin(false);
  };

  return (
    <BrowserRouter>
     <AuthProvider>
    <Routes>
<Route path='/' element={<Login/>} />
<Route path='/dashboard' element={<Dashboard/>} />
<Route path='/list' element={<List/>}></Route>
    </Routes>
    </AuthProvider>
    </BrowserRouter>
    // <MyContextProvider>
    //   <div className="App">
    //     <Navbar />
    //    
    //     <Context />
    //   </div>
    // </MyContextProvider>

  );
}

export default App;
