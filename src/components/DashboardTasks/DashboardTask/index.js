import {useState} from "react";
import styled from "styled-components";

import { ReactComponent as IconStar } from '../../../assets/icons/icon-star.svg';
import { ReactComponent as IconStarRed } from '../../../assets/icons/icon-star-red.svg';
import { ReactComponent as IconPin } from '../../../assets/icons/icon-pin.svg';
import { ReactComponent as IconPinRed } from '../../../assets/icons/icon-pin-red.svg';
import { ReactComponent as IconPencil } from '../../../assets/icons/icon-pencil.svg';
import { ReactComponent as IconDelete } from '../../../assets/icons/plus_circle_icon.svg';


const Task = styled.div`
    background: ${props => props.completed ? "white" : "red"};
    border: 1px solid #E6E7E9;
    border-radius: 8px;
    padding: 15px;
    margin: 0 0 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: red;
`;

const Title = styled.h2`
    font-weight: 700;
    font-size: 14px;
    line-height: 140%;
    letter-spacing: -0.5px;
    color: rgba(24, 24, 25, 0.9);
    margin:0;
    width: calc(100% - 200px);
`;

const Input = styled.input`
    font-weight: 700;
    font-size: 14px;
    line-height: 140%;
    letter-spacing: -0.5px;
    color: rgba(24, 24, 25, 0.9);
    margin:-10px 0;
    padding: 0 10px;
    border: 1px solid red;
    height: 50px;
    width: calc(100% - 200px);
`;

const IconButton = styled.button`
    background: none;
    border: 0;
    padding:0;
    margin:0 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: red;
    width: 40px;
    height: 40px;
`;

const DashboardTask = ({item: {id, title, completed, pinned}, setTasks , tasks, setEditTask, editTask}) => {

  const [isEdit, setIsEdit] = useState(false);

  const deleteTask = (id) => {
    setTasks(tasks.filter(item => item.id !== id))
  }

  const toggleValue = (e, itemId) => {
    const value = e.target.closest('button').getAttribute("name");

    setTasks(tasks.map(item => {
      if(item.id == itemId) {
        return {...item, [value]:!(item[value]) }
      }
      return item
    }))
  }


  const updateTask = (e) => {
    const newData = {
      id: e.target.name,
      title: e.target.value,
      completed: tasks[e.target.name].completed,
      pinned: tasks[e.target.name].pinned
    }
    setEditTask(newData)
  }


  const setUpdateTask = (e) => {
    if (e.key === 'Enter') {
      setIsEdit(false)

      let newTasks = tasks.slice();
      newTasks[editTask.id] = editTask;
      setTasks(newTasks)
    }

    if (e.key === 'Escape') {
      setIsEdit(false)
    }
  }

  return (
    <Task completed>
      <IconButton name='completed' type='button' onClick={(e) => toggleValue(e,id)}>
        {completed ? <IconStarRed /> : <IconStar />}
      </IconButton>

      {isEdit ? <Input name={id}
                       placeholder={title}
                       onKeyDown={setUpdateTask}
                       onChange={updateTask} /> : <Title>{title}</Title>}

      <IconButton name='pinned' type='button' onClick={(e) => toggleValue(e,id)}>
        {pinned ? <IconPinRed /> : <IconPin />}
      </IconButton>

      <IconButton type='button' onClick={() => setIsEdit(!isEdit)}>
        <IconPencil />
      </IconButton>

      <IconButton type='button' onClick={() => deleteTask(id)}>
        <IconDelete />
      </IconButton>
    </Task>
  );
};

export default DashboardTask;
