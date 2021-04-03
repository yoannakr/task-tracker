import React, {useState} from "react";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [isShowAddTask, setIsShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([
    { 
      id:1,
      text:"test2",
      day: Date(Date.now()),
      reminder: true,
    }
  ]);

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task)=> task.id === id ? { ...task, reminder: !task.reminder} : task));
  };

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10045) + 1;
    const newTask = { id:{id}, ...task};
    setTasks([...tasks, newTask]);
  };

  // Show Add Form
  const showAddForm = () => {
    setIsShowAddTask(!isShowAddTask);
  };

  return (
    <div className="container">
      <Header 
        isShowAddTask={isShowAddTask} 
        onAdd={showAddForm} />
      {isShowAddTask ? <AddTask onAdd={addTask}/> : 
        tasks.length > 0 
        ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> 
        : <h3>No tasks</h3>
    }
    </div>
  );
}

export default App;
