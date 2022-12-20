import {useState} from "react";

import {TasksData} from '../../data/TasksData';
import DashboardTasks from "../../components/DashboardTasks";
import DashboardTaskForm from "../../components/DashboardTasks/DashboardTaskForm";


const Tasks = () => {

  const [tasks, setTasks] = useState(TasksData);
  const emptyTask = {
    id: tasks.length+1,
    title: '',
    completed: false,
    pinned: false
  }

  const [newTask, setNewTask] = useState(emptyTask);
  const [editTask, setEditTask] = useState(emptyTask);



  return (
    <div>
      Tasks
      <DashboardTasks tasks={tasks}
                      editTask={editTask}
                      setEditTask={setEditTask}
                      setTasks={setTasks}
      />

      <DashboardTaskForm setTasks={setTasks}
                         newTask={newTask}
                         tasks={tasks}
                         emptyTask={emptyTask}
                         setNewTask={setNewTask}
      />
    </div>
  );
};

export default Tasks;
