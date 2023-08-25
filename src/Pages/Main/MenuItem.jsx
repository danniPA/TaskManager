function MenuItem({title , extraClassName,onClickEvent}){
    let checkedTableName = (tableName )=>{
        if(tableName.length > 12&&!extraClassName.includes("item-dev")) {
            let word = tableName.substring(0,12);
            word = word.concat("...");
            return word;
        }
        else{
            return tableName;
        }
    }
    return(
        <div className="menu-item" onClick={onClickEvent}>
            <div className={`${extraClassName}`}>
                {checkedTableName(title)}
            </div>
        </div>
    );
}

export default MenuItem;