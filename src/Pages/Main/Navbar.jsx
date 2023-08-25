import react from 'react';
import UpMenu from './UpMenu';
import MenuItem from './MenuItem'
import MenuItemTable from './MenuItemTable'

import exitImg from '../../img/close.png'

import { useSelector, useDispatch } from "react-redux";
import { addNewTable,setActiveTable } from "../../redux/Slices/tableSlice";
import { NavLink,Link,Outlet } from "react-router-dom";

function Navbar({isMenuOpen, menuStateChange}){

    const dispatch = useDispatch();

    let tables = useSelector((state) => state.table.tables);
    let pickedTable = useSelector((state) => state.table.activeTable);

    function pickTable(elem){
        dispatch(setActiveTable(elem))
        menuStateChange();
    }
    let tablesElem = tables.map((elem,idx) => {
        return<MenuItemTable tableData={elem} pickedTableId={pickedTable.id} 
        onClickEvent={()=>pickTable(elem)} key={idx}/>
    });
    

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

    return(
        <div className= {`navbar-container ${isMenuOpen ? 'opened-menu' : 'closed-menu'} `}>
            <div className="navbar">
                <UpMenu logoText={"Menu"} altText={"Exit"} img={exitImg} onClickEvent={menuStateChange}/>
                    {/* <NavLink to="/Account">
                        <MenuItem title={"Account"} extraClassName={"item-title"}/>
                    </NavLink> */}

                    <NavLink to="/Settings">
                        <MenuItem title={"Settings"} extraClassName={"item-title"}/>
                    </NavLink>

                    <NavLink to="/About">
                        <MenuItem title={"About"} extraClassName={"item-title"}/>
                    </NavLink>
                    <Outlet/>

                    <MenuItem title={"Tables"} extraClassName={"menu-section"}/>
                    <div className="add-new-table-section">
                        <input value={value} onChange={(e) => setVal(e.target.value)} onKeyUp={handleKeyUp} type="text" placeholder="Enter new table name..." className="newTable-input"/>
                        <MenuItem onClickEvent={addTable} title={"Add new table"} extraClassName={"item-title item-dev"}/>
                    </div>
                    <div className="navbar-tables">
                        {tablesElem}
                    </div>
            </div>
        </div>
    );
}

export default Navbar;