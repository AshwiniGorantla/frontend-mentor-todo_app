import React, { useState } from "react";

const Tasklist = ({checkList, removeItem, updateList}) => {

    const [selectedList, setSelected] = useState([]);
    const [slectedItemsIndex, setIndex] = useState([])

    const closeStyle = {
        position: 'relative',
        right: '1em',
        float: 'right'
    };

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
        setIndex([...slectedItemsIndex, index]);
        setSelected([...selectedList, listItem])
       } else if(markStyle.visibility === 'visible'){
            markStyle.visibility = 'hidden';
            textStyle.textDecoration = '';
            const newList = [...selectedList];
            let indexOfItem = selectedList.indexOf('setSelected')
            newList.splice(indexOfItem, 1);

            const indexList = [...slectedItemsIndex];
            let selectedItem = indexList.indexOf(index);
            indexList.splice(selectedItem, 1);
            setIndex([...indexList]);

            setSelected([...newList]);
        }
    }

    const markCompleted = () => {
        slectedItemsIndex.map((index) => {
            let textStyle = document.getElementById(`list-text-${index}`).style;
            textStyle.textDecoration = 'line-through';
        });
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
                            <span style={closeStyle} className="close"  >
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
                    <div>{checkList.length} Items left</div>
                    <div className="inside-flex">
                        <span onClick={()=>{updateList([],'all');}}>All</span>
                        <span onClick={()=>{updateList(selectedList, 'active')}}>Active</span>
                        <span onClick={markCompleted}>Completed</span>
                    </div>
                    <div onClick={()=>{updateList(selectedList, 'remove');}}>Clear completed</div>
                </div>
            </div>
        </div>
    );
};

export default Tasklist;