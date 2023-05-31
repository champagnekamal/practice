import React from 'react';
import { useContext } from 'react';
import { MyContext } from './Mycontext';

const Context = () => {
  const { user, data } = useContext(MyContext);

  return (
    <div>
      <p>{user}</p>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Context;
