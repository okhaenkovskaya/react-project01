import React from 'react';

const DashboardTaskForm = ({setNewTask, newTask, emptyTask , setTasks, tasks}) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks(tasks.concat(newTask))
    setNewTask(emptyTask)
  }

  const handleChange = (e) => {
    const {name, value} = e.target;
    setNewTask({...newTask, [name]: value, id: tasks.length+1})
  }

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} name="title" type="text" placeholder="Type here..." value={newTask.title} />
      <button>SUBMIT</button>
    </form>
  );
};

export default DashboardTaskForm;
