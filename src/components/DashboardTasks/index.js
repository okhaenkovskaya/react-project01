
import DashboardTask from "./DashboardTask";

const DashboardTasks = ({tasks, setTasks, setEditTask, editTask}) => {
  return (
    <div>
      {tasks.map(item => <DashboardTask key={item.id}
                                        item={item}
                                        tasks={tasks}
                                        setEditTask={setEditTask}
                                        editTask={editTask}
                                        setTasks={setTasks}
                          /> )}
    </div>
  );
};

export default DashboardTasks;
