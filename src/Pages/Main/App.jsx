import React from 'react'

import Body from './Body';
import Tables from './Tables';
import UpMenu from './UpMenu';
import Navbar from './Navbar';

import { useSelector, useDispatch } from "react-redux";
import menuImg from '../../img/menu.png'

function App() {
  const [isMenuOpen, setMenuOpen] = React.useState(false)
  let pickedTable = useSelector((state) => state.table.activeTable);
  const {theme} = useSelector((state) => state.settings)

  function menuState(change=true){
    if(!change) return;
    setMenuOpen(!isMenuOpen)
  }

  return (
    <div className={`App`}>
      <Navbar isMenuOpen={isMenuOpen} menuStateChange={menuState}/>
      <div onClick={() =>menuState(isMenuOpen)}>
        {console.log(pickedTable.name)}
        {console.log(pickedTable.name===undefined)}
        <UpMenu logoText={pickedTable.name===undefined?'Task Manager':pickedTable.name} altText={"Menu"} img={menuImg} onClickEvent={menuState}/>
        <div className="content">
          <Tables/>
          <Body />
        </div>
      </div>
    </div>
  );
}

export default App;
