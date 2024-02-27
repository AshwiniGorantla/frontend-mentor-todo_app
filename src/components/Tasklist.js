import React, { useState } from "react";

const Tasklist = ({checkList, eventForRemove, eventForListUpdate}) => {

    const [selectedList, setSelected] = useState([]);

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

    const toggleMark = (index,listItem) => {
       let markStyle = document.getElementById(`list-check-mark-${index}`).style;
       if(markStyle.visibility === 'hidden') {
        markStyle.visibility = 'visible';
        setSelected([...selectedList, listItem])
       } else if(markStyle.visibility === 'visible'){
            markStyle.visibility = 'hidden';
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
                            <span className="list-check-icon" onClick={()=>{toggleMark(index,listItem);}} >
                                <img id={`list-check-mark-${index}`} src={require('../images/icon-check.png')} alt='check'
                                style={checkMarkCss} />
                            </span>
                            <span style={closeStyle} className="close"  >
                                <img src={require('../images/icon-cross.png')} alt='close' onClick={()=>{
                                eventForRemove(index)}} />
                            </span>
                            <span className="list-text">{listItem}</span>
                        </li>
                        <hr style={{margin: 0}}/>
                    </div>
                ))}
            </ul>

            <div className="bottom-actions">
                <div className="flex-container">
                    <div>{checkList.length} Items left</div>
                    <div className="inside-flex">
                        <span>All</span>
                        <span>Active</span>
                        <span onClick={()=>{eventForListUpdate(selectedList);}}>Completed</span>
                    </div>
                    <div>Clear completed</div>
                </div>
            </div>
        </div>
    );
};

export default Tasklist;