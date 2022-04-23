import React from 'react'
import Task from './Task'
const Tasks = ({tasks,delettask,toggoleReminder}) => {

  return (
    < >
        {tasks.map((task)=>{
            return <Task  key={task.id} ta={task}
             delet={delettask}
             reminder={toggoleReminder} 
             /> })}
    </>
  )
}

export default Tasks