import React, { useState } from "react";

const Tasklist = ({checkList, removeItem, updateList}) => {

    const [selectedList, setSelected] = useState([]);

    const checkMarkCss = {
        position: 'relative',
        left: '4px',
        bottom: '3px',
        visibility: 'hidden'
    };

    const toggleCheckMark = (index,listItem) => {
       let markStyle = document.getElementById(`list-check-mark-${index}`).style;
       let textStyle = document.getElementById(`list-text-${index}`).style;
       if(markStyle.visibility === 'hidden') {
        markStyle.visibility = 'visible';
        textStyle.textDecoration = 'line-through';
        setSelected([...selectedList, listItem])
       } else if(markStyle.visibility === 'visible'){
            markStyle.visibility = 'hidden';
            textStyle.textDecoration = '';
            const newList = [...selectedList];
            let indexOfItem = selectedList.indexOf('setSelected')
            newList.splice(indexOfItem, 1);
            setSelected([...newList]);
        }
    }

    return (
        <div className="checkbox-wrapper">
            <ul>
                {checkList.map((listItem, index) => (
                    <div key={index}>
                        <li key={index}>
                            <span className="list-check-icon" onClick={()=>{toggleCheckMark(index,listItem);}} >
                                <img id={`list-check-mark-${index}`} src={require('../images/icon-check.png')} alt='check'
                                style={checkMarkCss} />
                            </span>
                            <span className="close"  >
                                <img src={require('../images/icon-cross.png')} alt='close' onClick={()=>{
                                removeItem(index)}} />
                            </span>
                            <span className="list-text" id={`list-text-${index}`}>{listItem}</span>
                        </li>
                        <hr style={{margin: 0}}/>
                    </div>
                ))}
            </ul>

            <div className="bottom-actions">
                <div className="flex-container">
                    <div style={{cursor:"pointer"}}>{checkList.length} Items left</div>
                    <div className="inside-flex">
                        <span onClick={()=>{updateList([],'all');}}>All</span>
                        <span onClick={()=>{updateList(selectedList, 'active')}}>Active</span>
                        <span onClick={()=>{updateList(selectedList, 'completed')}}>Completed</span>
                    </div>
                    <div style={{cursor:"pointer"}} onClick={()=>{
                        let listToClear = selectedList;
                        setSelected([])
                        updateList(listToClear, 'clear');}}>Clear completed</div>
                </div>
            </div>
        </div>
    );
};

export default Tasklist;