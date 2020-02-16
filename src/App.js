import React from 'react';
import './App.scss';
import Form from './components/Form';
import TaskList from './components/TaskList';
import StorageLoader from './components/StorageLoader';
import ClearButton from './components/ClearButton';
import TasksState from './context/tasks/TasksState';

function App() {
  return (
    <TasksState>
      <div className='rotate'>
        <span>please rotate the phone</span>
      </div>
      <div className='app'>
        <StorageLoader />
        <div className='app-head'>
          <h1 className='app-title'>Eisenhower matrix</h1>
          <Form />
          <h4>
            Click on a task to edit. Then click outside the field to save the
            changes.
          </h4>
        </div>
        <div className='clear-all'>
          <ClearButton />
        </div>
        <div className='app-lists'>
          <div className='unordered-list'>
            <TaskList priority='unordered' />
          </div>
          <div className='app-matrix'>
            <TaskList priority='do first' />
            <TaskList priority='schedule' />
            <TaskList priority='delegate' />
            <TaskList priority="don't do" />
          </div>
        </div>
      </div>
    </TasksState>
  );
}

export default App;
