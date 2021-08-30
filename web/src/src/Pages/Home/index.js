import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { save, remove, toggle, load } from '../../store/modules/app/actions';

const Home = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState('');

  const { tasks, loading } = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(load());
  }, []);

  const addTask = () => {
    dispatch(
      save({
        id: new Date().getTime(),
        title: task,
        completed: false,
      })
    );
  };

  const removeTask = (taskId) => {
    dispatch(remove(taskId));
  };

  const toggleTask = (taskId) => {
    dispatch(toggle(taskId));
  };

  return (
    <>
      {loading && <h1>Carregando...</h1>}
      {!loading && (
        <>
          <input
            value={task}
            type="text"
            placeholder="Digite uma task..."
            onChange={(e) => setTask(e.target.value)}
          />
          <button onClick={addTask}>Cadastrar Task</button>
          <br />
          <hr />
          Tarefas Finalizadas:{' '}
          <b>{tasks?.filter((task) => task?.completed).length}</b>
          <br />
          Tarefas Pendentes:{' '}
          <b> {tasks?.filter((task) => !task?.completed).length}</b>
          <hr />
          <br />
          <ul>
            {tasks?.map((task) => (
              <li
                style={{
                  background: task?.completed ? 'green' : 'yellow',
                }}
              >
                <input
                  checked={task?.completed}
                  type="checkbox"
                  onClick={() => toggleTask(task?.id)}
                />
                {task?.title}{' '}
                <button onClick={() => removeTask(task?.id)}>Remover</button>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};

export default Home;
