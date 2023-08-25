function TableItem({tableData,pickedTableId,onClickEvent}) {
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
    return (
        <div className={`table-button button ${pickedTableId==tableData.id?"button-picked":""}`} onClick={onClickEvent}>
            {
                checkedTableName()
            }
        </div>
    );
  }
  
  export default TableItem;