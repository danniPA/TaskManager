import React from 'react'
import { Link } from 'react-router-dom';

function UpMenu({logoText,altText,img,onClickEvent}) {

  let checkedTableName = ( )=>{
    if(logoText.length > 30) {
        let word = logoText.substring(0,30);
        word = word.concat("...");
        return word;
    }
    else{
        return logoText;
    }
}
  return (
    <div className="up-menu">
      <div className="side-panel">
        <img src={img} alt={altText} draggable={false} onClick={onClickEvent} className='home-image image-button'/>
      </div>
      <div className="logo">{checkedTableName()}</div>
      <div className="side-panel"></div>
    </div>
  );
}

export default UpMenu;
