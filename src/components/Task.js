import React, { useContext, useState } from 'react';
import TasksContext from '../context/tasks/tasksContext';
import { ReactComponent as Trash } from './trash.svg';
import EditableLabel from 'react-inline-editing';

function Task({ taskBody, taskId, isDone }) {
  const [errorVisible, setErrorVisible] = useState(false);
  const tasksContext = useContext(TasksContext);
  const { deleteTask, setTaskPriority, editTask, setDone } = tasksContext;

  function handleChange(priority) {
    setTaskPriority(taskId, priority);
  }

  function handleFocusOut(text) {
    if (text.length === 0) {
      setErrorVisible(true);
    } else {
      setErrorVisible(false);
      editTask(taskId, text);
    }
  }

  function handleDone() {
    setDone(taskId, !isDone);
  }

  return (
    <div className='task'>
      <div
        className='done-marker'
        style={{ display: isDone ? 'block' : 'none' }}
      >
        <div className='done-line'></div>
      </div>
      <EditableLabel
        text={taskBody}
        labelClassName='task-body'
        inputClassName='task-body'
        inputWidth='100% !important'
        inputHeight='1em'
        inputMaxLength={50}
        labelFontWeight='bold'
        inputFontWeight='bold'
        inputFontSize='1em'
        onFocus={() => setErrorVisible(false)}
        onFocusOut={handleFocusOut}
      />
      <div
        className='edit-error'
        style={{ display: errorVisible ? 'block' : 'none' }}
      >
        Task can't be empty
      </div>
      <select
        className='select-priority'
        onChange={e => {
          handleChange(e.target.value);
        }}
      >
        <option value=''>Priority</option>
        <option value='do first'>Do first</option>
        <option value='schedule'>Schedule</option>
        <option value='delegate'>Delegate</option>
        <option value="don't do">Don’t Do</option>
        <option value='unordered'>Unordered</option>
      </select>
      <label className='done-container'>
        <input type='checkbox' onChange={handleDone} />
        <span className='checkmark'></span>
      </label>
      <button className='task-button' onClick={() => deleteTask(taskId)}>
        <Trash />
      </button>
    </div>
  );
}

export default Task;
