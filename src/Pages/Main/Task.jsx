import React from "react";

import trashImg from "../../img/trash.png";
import { useSelector, useDispatch} from "react-redux";
import { setTaskDone,deleteTask } from "../../redux/Slices/tableSlice";

function Task({taskText,done,idx}){
    const dispatch = useDispatch();
    const handleChange = () => {
        dispatch(setTaskDone(idx))
    };
    const handleDelete = () => {
        dispatch(deleteTask(idx))
    };

    return(
        <div className="task-container">
            <div className={`task-title ${done?"done":""}`} onClick={handleChange}>
                {taskText}
            </div>
            {/* <input type="checkbox" checked={isChecked} onChange={handleChange} className="cb-task-done"/> */}
            <img draggable={false} src={trashImg} onClick={handleDelete} className="delete-task-button image-button"></img>
        </div>
    );
}

export default Task;