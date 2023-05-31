import React, { useState, useEffect, useContext } from 'react';
import Navbar from './Navbar';
import AuthContext from './AuthContext';
import { useNavigate } from 'react-router-dom';

const List = () => {
  const { isloggedin } = useContext(AuthContext);
  const navigate = useNavigate();


  const [task, setTask] = useState('');
  const [alltask, setAlltask] = useState([]);
  const [index, setIndex] = useState('');
  const [edittask, setEdittask] = useState('');

  function handlesave(task) {
    if (index !== '') {
      const updatedtask = [...alltask];
      updatedtask[index] = edittask;
      setAlltask(updatedtask);
      setIndex('');
      setEdittask('');
    } else {
      setAlltask([...alltask, task]);
      setTask('');
    }
  }

  function handleedit(id) {
    setIndex(id);
    setEdittask(alltask[id]);
  }

  function handledelete(id) {
    const updatedtask = [...alltask];
    const list = updatedtask.slice(0, id);
    setAlltask(list);
  }
  useEffect(() => {
    if (!isloggedin) {
      navigate('/');
    }
  }, [isloggedin, navigate]);

  if (!isloggedin) {
    return null;
  }

  return (
    <>
      <Navbar />
      <div>
        <input
          type="text"
          name=""
          id=""
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={() => handlesave(task)}>Save Task</button>
      </div>
      <ul>
        {alltask.map((item, id) => (
          <li key={id}>
            <div>
              {id !== index ? (
                <>
                  {item}
                  <button onClick={() => handleedit(id)}>Edit</button>
                  <button onClick={() => handledelete(id)}>Delete</button>
                </>
              ) : (
                <div>
                  <input
                    type="text"
                    value={edittask}
                    onChange={(e) => setEdittask(e.target.value)}
                  />
                  <button onClick={() => handlesave(task)}>Save Task</button>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default List;
