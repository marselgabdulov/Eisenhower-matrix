import React from 'react';
import './App.css';
import Form from './components/Form';
import TaskList from './components/TaskList';
import TasksState from './context/tasks/TasksState';

function App() {
  return (
    <TasksState>
      <div className='App'>
        <h1>Eisenhower matrix</h1>
        <Form />
        <TaskList />
      </div>
    </TasksState>
  );
}

export default App;
