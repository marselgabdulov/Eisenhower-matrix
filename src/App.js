import React from 'react';
import './App.scss';
import Form from './components/Form';
import TaskList from './components/TaskList';
import TasksState from './context/tasks/TasksState';

function App() {
  return (
    <TasksState>
      <div className='app'>
        <div className='app-head'>
          <h1 className='app-title'>Eisenhower matrix</h1>
          <Form />
        </div>
        <TaskList priority='unordered' />
        <div className='matrix'>
          <TaskList priority='do first' />
          <TaskList priority='schedule' />
          <TaskList priority='delegate' />
          <TaskList priority="don't do" />
        </div>
      </div>
    </TasksState>
  );
}

export default App;
