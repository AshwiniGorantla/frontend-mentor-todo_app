import React, { useState } from "react";
import Tasklist from "./Tasklist";

function HeaderBanner(){
    const [checkList,setCheckList] = useState([]);

    const handleSubmit =(event) => {
        event.preventDefault();
        setCheckList([...checkList, event.target[0].value]);
        event.target.reset();
    }

    const handleRemove = (index) => {
        const newList = [...checkList];
        newList.splice(index, 1);
        setCheckList([...newList]);
    }

    const eventForListUpdate = (updatedList) => {
        setCheckList([...updatedList]);
    };

    return (
        <div>
            <div className="backgroud_image">
                <img src={require('../images/bg-desktop-dark.jpg')} alt="Banner" />
            </div>
            <div className="text-on-image">
                <h3 style={{margin:'0'}}>TODO</h3>
                <img className='sun' src={require('../images/icon-sun.png')} alt='sun'/>
            </div>
            <div className="input_area">
                <form onSubmit={handleSubmit}>
                    <div className="check-icon" onClick={()=>{
                        let markStyle = document.getElementById('check-mark').style;
                        markStyle.visibility = markStyle.visibility === 'hidden' ? 'visible' : 'hidden';}} >
                        <img id='check-mark' className='check-mark' src={require('../images/icon-check.png')} alt='check'/>
                    </div>
                    <input type="text" placeholder="Currently typing" />
                </form>
            </div>
            <Tasklist checkList={checkList} eventForRemove={handleRemove} eventForListUpdate={eventForListUpdate}/>
        </div>
    )
}

export default HeaderBanner