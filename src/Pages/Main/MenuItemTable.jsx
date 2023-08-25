function MenuItemTable({tableData,pickedTableId,onClickEvent}){
    let checkedTableName = ( )=>{
        if(tableData.name.length > 12) {
            let word = tableData.name.substring(0,12);
            word = word.concat("...");
            return word;
        }
        else{
            return tableData.name;
        }
    }
    return(
        <div className="menu-item" onClick={onClickEvent}>
            <div className={`item-title ${pickedTableId==tableData.id?"title-picked":""}`}>
                {checkedTableName()}
            </div>
        </div>
    );
}

export default MenuItemTable;