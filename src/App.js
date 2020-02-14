import React from 'react';
import './App.css';
import Form from './components/Form';
import TasksState from './context/tasks/TasksState';

function App() {
  return (
    <TasksState>
      <div className='App'>
        <h1>Eisenhower matrix</h1>
        <Form />
      </div>
    </TasksState>
  );
}

export default App;
