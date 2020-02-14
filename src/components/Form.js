import React, { useState } from "react";

function Form() {
  const [newTask, setNewTask] = useState("");
  return (
    <form
      onSubmit={e => {
        console.log(newTask);
        e.preventDefault();
      }}
    >
      <input
        type="text"
        name="newTask"
        placeholder="add task"
        onChange={e => setNewTask(e.target.value)}
      />
      <input type="submit" value="add task" />
    </form>
  );
}

export default Form;
