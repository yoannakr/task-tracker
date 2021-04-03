import React from "react";
import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div 
            className={task.reminder ? "task reminder" : "task"}
            onDoubleClick={() => onToggle(task.id)}>
            <h3>
                {task.text} 
                <FaTimes className="deleteIcon" 
                onClick={() => onDelete(task.id)}/>
            </h3>
            <p>{task.day}</p>
        </div>
    )
};

export default Task;