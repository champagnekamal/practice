import React, { createContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isloggedin, setIsLoggedin] = useState(false);

  return (
    <AuthContext.Provider value={{ isloggedin, setIsLoggedin }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
