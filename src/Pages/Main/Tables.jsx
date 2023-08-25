import react from "react";
import TableItem from "./TableItem";
import { useSelector, useDispatch } from "react-redux";
import { addNewTable,setActiveTable } from "../../redux/Slices/tableSlice";

function Tables() {
    const dispatch = useDispatch();

    let tables = useSelector((state) => state.table.tables);
    let pickedTable = useSelector((state) => state.table.activeTable);
    let tablesElem = [];


    if (tables) {
        tablesElem = tables.map((elem) => {
            return <TableItem tableData={elem} key={elem.id} pickedTableId={pickedTable.id} 
            onClickEvent={()=>dispatch(setActiveTable(elem))}/>;
        });
    }

    let [value, setVal] = react.useState("");

    function addTable(){
        if(value.length>=3){
            dispatch(addNewTable(value));
            setVal("");
        }
        else{
            alert("Table name must contain at least 3 characters");
        }
    }

    const handleKeyUp = (event) => {
        if (event.key === "Enter") {
            addTable();
        }
    };

    return (
        <div className="table-menu">
            {tablesElem}
            <input
                value={value}
                onChange={(e) => setVal(e.target.value)}
                onKeyUp={handleKeyUp}
                type="text"
                className="text-input"
                placeholder="Enter new table name..."
            />
            <div className="table-button button button-add-table" onClick={addTable}>
                +
            </div>
        </div>
    );
}

export default Tables;
