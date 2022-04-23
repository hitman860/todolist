import React from 'react'
import {IoClose} from 'react-icons/io5'
const Task = ({ta,delet,reminder}) => {

 
  return (
    <div className={ `task ${ta.reminder ?'reminder' :''}`} onDoubleClick={()=>reminder(ta.id)}>
        <h3> {ta.text}
         <IoClose style={{color:'red',
         cursor:'pointer'}}
         onClick={()=>delet(ta.id)}/>
          </h3>
        <p>{ta.day}</p>
        </div>
  )
}

export default Task