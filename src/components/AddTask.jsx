import React, { useState } from "react";

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState("");
    const [day, setDay] = useState("");
    const [reminder, setReminder] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();

        if(!text) {
            alert("Please add task name");
            return;
        }

        onAdd({ text, day, reminder});
        clearFields();
    };

    const clearFields = () => {
        setText("");
        setDay("");
        setReminder(false);
    };

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task</label>
                <input type="text" placeholder="Add Task Name" value={text} onChange={(e) => setText(e.target.value)}/>
                <label>Day & Time</label>
                <input type="text" placeholder="Add Day & Time" value={day} onChange={(e) => setDay(e.target.value)}/>
                <div className="form-control form-control-check" >
                    <label>Set Reminder</label>
                    <input type="checkbox" value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}
                            checked={reminder}/>
                </div>
            </div>
            <input className=" btn btn-block" type="submit" value="Save Task" />
        </form>
    )
};

export default AddTask;