import styled from "styled-components";
import {useRef, useState} from "react";

const Input = styled.input`
    font-weight: 700;
    font-size: 14px;
    line-height: 140%;
    letter-spacing: -0.5px;
    color: rgba(24, 24, 25, 0.9);
    margin:0 20px 0 0;
    padding: 0 10px;
    border: 1px solid red;
    height: 50px;
    width: 520px;
    background: #FFFFFF;
    border: 1px solid #E6E7E9;
    border-radius: 8px;
`;


const Button = styled.button`
    background: #BDB2FF;
    border: 1px solid #BDB2FF;
    border-radius: 8px;
    border: 0;
    padding:10px;
    height: 50px;
    width: 192px;
    margin:0;
    letter-spacing: -0.5px;
    color: #262835;
    
    &:disabled {
      opacity: 0.5;
    }
`;

const DashboardTaskForm = ({setNewTask, newTask, emptyTask , setTasks, tasks}) => {
  const [isValid, setIsValid] = useState(false);
  const button = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if(isValid) {
      setTasks(tasks.concat(newTask))
      setNewTask(emptyTask)
    }
  }

  const handleChange = (e) => {
    const {name, value} = e.target;
    value.length > 3 ? setIsValid(true) : setIsValid(false)
    value.length > 3 ? button.current.disabled = false : button.current.disabled = true;
    setNewTask({...newTask, [name]: value, id: tasks.length+1})
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input onChange={handleChange}
              name="title"
              type="text"
              placeholder="Type here..."
              value={newTask.title} />
      <Button ref={button} disabled>SUBMIT</Button>
    </form>
  );
};

export default DashboardTaskForm;
