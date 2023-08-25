import react from "react";
import { useSelector, useDispatch } from "react-redux";
import { addNewTask } from "../../redux/Slices/tableSlice";

function AddTaskPanel() {
  let [value, setVal] = react.useState("");
  const dispatch = useDispatch();

  function addTask() {
    if (value.trim().length > 0) {
        dispatch(addNewTask(value));
        setVal("");
    } else {
      alert("Task can not be empty");
      setVal("");
    }
  }

  const handleKeyUp = (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  };
  return (
    <div className="add-task-panel">
      <input
        value={value}
        onChange={(e) => setVal(e.target.value)}
        onKeyUp={handleKeyUp}
        type="text"
        placeholder="Enter a task..."
        className="task-input"
      />
      <div className="add-task-button button" onClick={() => addTask(value)}>Add</div>
    </div>
  );
}

export default AddTaskPanel;
