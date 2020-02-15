import React, { useContext } from 'react';
import TasksContext from '../context/tasks/tasksContext';
import { ReactComponent as Trash } from './trash.svg';
import EditableLabel from 'react-inline-editing';

function Task({ body, taskId }) {
  const tasksContext = useContext(TasksContext);
  const { deleteTask, setTaskPriority, editTask } = tasksContext;

  function handleChange(priority) {
    setTaskPriority(taskId, priority);
  }

  function handleFocusOut(text) {
    editTask(taskId, text);
  }

  return (
    <div className='task'>
      <EditableLabel
        text={body}
        labelClassName='task-body'
        inputClassName='task-body'
        inputWidth='220px'
        inputHeight='1em'
        inputMaxLength={50}
        labelFontWeight='bold'
        inputFontWeight='bold'
        inputFontSize='1em'
        onFocusOut={handleFocusOut}
      />
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
      <button className='task-button' onClick={() => deleteTask(taskId)}>
        <Trash />
      </button>
    </div>
  );
}

export default Task;
