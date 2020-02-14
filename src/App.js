import React from 'react';
import './App.css';
import Form from './components/Form';
import UnorderedTasks from './components/UnorderedTasks';
import TasksState from './context/tasks/TasksState';

function App() {
  return (
    <TasksState>
      <div className='App'>
        <h1>Eisenhower matrix</h1>
        <Form />
        <UnorderedTasks />
      </div>
    </TasksState>
  );
}

export default App;
