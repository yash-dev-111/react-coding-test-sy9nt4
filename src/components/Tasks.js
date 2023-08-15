import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TaskItem from './TaskItem';

const Tasks = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/todos'
        );
        const data = await response.json();
        dispatch({ type: 'SET_TASKS', payload: data });
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, [dispatch]);

  const toggleTaskCompletion = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );

    dispatch({ type: 'SET_TASKS', payload: updatedTasks });
  };

  return (
    <div className="tasks">
      <h2>Task List (Anar Coding Assignment)</h2>
      <ul>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            handleCheckboxChange={toggleTaskCompletion}
          />
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
