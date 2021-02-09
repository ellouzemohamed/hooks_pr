import React from 'react';
const Todo =({item,taskDone,deleteTask}) =>{
    return (
        <div className='element'>
            <button className='done' onClick={()=>taskDone(item.id)}>
                {!item.isDone ?'Undo':'done'}</button>
            <button className='delete' onClick={()=>deleteTask(item.id)}>Delete</button>
            <span className={item.isDone?'lineth':'text'}> {item.task} </span>

        </div>
    )
}
export default Todo;