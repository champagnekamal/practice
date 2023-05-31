import React, { createContext, useEffect, useState } from 'react';

export const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [user, setUser] = useState("akash kamal");
  const [data, setData] = useState([]);
  useEffect(()=>{
    const fetchdata = async()=>{
      try{
        const res =await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        console.log(data);
        setData(data);
      }
      catch(error){
        console.warn(error)
      }
    }
    fetchdata()
  }, [])

  return (
    <MyContext.Provider value={{user, data}}>
      {children}
    </MyContext.Provider>
  );
};
