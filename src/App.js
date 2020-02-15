import React from 'react';
import './App.scss';
import Form from './components/Form';
import TaskList from './components/TaskList';
import StorageLoader from './components/StorageLoader';
import TasksState from './context/tasks/TasksState';

function App() {
  return (
    <TasksState>
      <div className='app'>
        <StorageLoader />
        <div className='app-head'>
          <h1 className='app-title'>Eisenhower matrix</h1>
          <Form />
        </div>
        <div className='unordered-list'>
          <TaskList priority='unordered' />
        </div>
        <div className='do-first-list'>
          <TaskList priority='do first' />
        </div>
        <div className='schedule-list'>
          <TaskList priority='schedule' />
        </div>
        <div className='delegate-list'>
          <TaskList priority='delegate' />
        </div>
        <div className='dont-do-list'>
          <TaskList priority="don't do" />
        </div>
      </div>
    </TasksState>
  );
}

export default App;
