import {useState} from "react";
import styled from "styled-components";

import {TasksData} from '../../data/TasksData';
import DashboardTasks from "../../components/DashboardTasks";
import DashboardTaskForm from "../../components/DashboardTasks/DashboardTaskForm";

const Title = styled.h2`
    font-weight: 600;
    font-size: 32px;
    line-height: 39px;
    letter-spacing: -0.02em;
    color: #C1C6DB;
    margin:0 0 30px;
`;

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
      <Title>Tasks</Title>

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
