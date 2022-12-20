import {useState} from "react";
import { ReactComponent as IconStar } from '../../../assets/icons/icon-star.svg';
import { ReactComponent as IconStarRed } from '../../../assets/icons/icon-star-red.svg';
import { ReactComponent as IconPin } from '../../../assets/icons/icon-pin.svg';
import { ReactComponent as IconPinRed } from '../../../assets/icons/icon-pin-red.svg';
import { ReactComponent as IconPencil } from '../../../assets/icons/icon-pencil.svg';
import { ReactComponent as IconDelete } from '../../../assets/icons/plus_circle_icon.svg';

const DashboardTask = ({item: {id, title, completed, pinned}, setTasks , tasks, setEditTask, editTask}) => {

  const [isEdit, setIsEdit] = useState(false);

  const deleteTask = (id) => {
    setTasks(tasks.filter(item => item.id !== id))
  }

  const updateCompleted = (itemId) => {
    setTasks(tasks.map(item => {
      if(item.id == itemId) {
        return {...item, completed:!(item.completed) }
      }
      return item
    }))
  }

  const updatePinned = (itemId) => {
    setTasks(tasks.map(item => {
      if(item.id == itemId) {
        return {...item, pinned:!(item.pinned) }
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
    <div>
      <button type='button' onClick={() => updateCompleted(id)}>
        {completed ? <IconStarRed /> : <IconStar />}
      </button>

      {isEdit ? <input name={id}
                       placeholder={title}
                       onKeyDown={setUpdateTask}
                       onChange={updateTask} /> : <h2>{title}</h2>}

      <button type='button' onClick={() => updatePinned(id)}>
        {pinned ? <IconPinRed /> : <IconPin />}
      </button>

      <button type='button' onClick={() => setIsEdit(!isEdit)}>
        <IconPencil />
      </button>

      <button type='button' onClick={() => deleteTask(id)}>
        <IconDelete />
      </button>
    </div>
  );
};

export default DashboardTask;
