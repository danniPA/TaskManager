import react from 'react';
import AddTaskPanel from "./AddTaskPanel";
import Task from "./Task";
import { useSelector, useDispatch } from "react-redux";

function Body() {
    let pickedTable = useSelector((state) => state.table.activeTable);
    let tables = useSelector((state) => state.table.tables);

    let taskElems = [];

    if (pickedTable && pickedTable.tasks) {
        taskElems = pickedTable.tasks.map((elem, idx) => {
        if (!elem.deleted) {
            return <Task taskText={elem.name} done={elem.done} idx={idx} key={idx} />;
        } else {
            return null;
        }
        });
    } else {
        taskElems = [];
    }

    return (
    <div className="table">
        {pickedTable.id === undefined ? (
            <react.Fragment>
                <div className="center-text">{tables.length>0?"Open any table you want...":"Create any table you want..."}</div>
            </react.Fragment>) : 
        (
        <react.Fragment>
            <AddTaskPanel />
            <div className="task-table">
                {taskElems}
            </div>
        </react.Fragment>
    )}
    </div>
    );
}

export default Body;