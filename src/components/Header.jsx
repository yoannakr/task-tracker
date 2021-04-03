import React from "react";
import Button from "./Button";

const Header = ({ isShowAddTask, onAdd }) => {
    const btnTitle = isShowAddTask ? "Close" : "Add";
    const btnClassName = isShowAddTask ? "btn btn-red" : "btn";

    return (
        <header className="header">
            <h1>Task Tracker</h1>
            <Button className={btnClassName} title={btnTitle} onClick={onAdd}/>
        </header>
    )
};

export default Header;